#include "main.h"

/* ----------------------------------------- */
// Constants and variables
const uint8_t CDC_BUF_SIZE = 64;
uint8_t r = 0;
uint32_t hex_code = 0x00000000;
uint8_t button_key_code = 0;

/* ----------------------------------------- */

void invert_pwm(uint16_t *pwm_value) {
    *pwm_value = 255 - *pwm_value;
}

// Helper function to decompile hex color code into RGB components
void hex_to_rgb(uint32_t hex_code, uint8_t *red, uint8_t *green, uint8_t *blue) {
    //convert the uint8_t hex code into an equivalent uint16_t for the pwm, additionally invert the values as our LEDs share common power 
    *red = 255 - ( (hex_code >> 16) & 0xFF );
    *green = 255 - ( (hex_code >> 8) & 0xFF);
    *blue = 255 - ( hex_code & 0xFF);

}

// Helper function to set the RGB color using PWM
void set_button_hex_color(uint32_t hex_code) {

    uint8_t red, green, blue;

    hex_to_rgb(hex_code, &red, &green, &blue); 

    pwm_set_gpio_level(RED_LED, red);
    pwm_set_gpio_level(GREEN_LED, green);
    pwm_set_gpio_level(BLUE_LED, blue);

}


// debouncing technique and make sure the button only gets pressed once
bool is_button_pressed() {
    static bool last_button_state = true;
    static uint32_t last_press_time = 0;
    bool current_button_state = gpio_get(BTN_PIN) == 0;
    uint32_t current_time = to_us_since_boot(get_absolute_time());

    if (current_button_state && !last_button_state && current_time - last_press_time > DEBOUNCE_DELAY_US) {
        last_press_time = current_time;
        last_button_state = current_button_state;
        return true;
    }
    
    last_button_state = current_button_state;
    return false;
}

void button_box_adc_init(){
    adc_init(); 

    adc_gpio_init(POT_PIN); 

    adc_select_input(0); 

}

void button_box_gpio_init(){

    //gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);

    //gpio_init(BTN_PIN);
    gpio_set_dir(BTN_PIN, GPIO_IN);
    gpio_pull_up(BTN_PIN); 

}

void button_box_pwm_init(){
    // Set up PWM for RGB LEDs
    gpio_set_function(RED_LED, GPIO_FUNC_PWM);
    gpio_set_function(GREEN_LED, GPIO_FUNC_PWM);
    gpio_set_function(BLUE_LED, GPIO_FUNC_PWM);

    uint r_slice = pwm_gpio_to_slice_num(RED_LED);
    uint g_slice = pwm_gpio_to_slice_num(GREEN_LED);
    uint b_slice = pwm_gpio_to_slice_num(BLUE_LED);

    pwm_config config = pwm_get_default_config();
    pwm_config_set_wrap(&config, 255);

    pwm_init(r_slice, &config, true);
    pwm_init(g_slice, &config, true);
    pwm_init(b_slice, &config, true);

    pwm_set_gpio_level(RED_LED, 0);
    pwm_set_gpio_level(GREEN_LED, 0);
    pwm_set_gpio_level(BLUE_LED, 0);

    pwm_set_enabled(r_slice, true);
    pwm_set_enabled(g_slice, true);
    pwm_set_enabled(b_slice, true);

}


void Button_Box_Systems_init(){

    stdio_usb_init();

    stdio_init_all();
    bi_decl(bi_program_description("Button_Box"));
    bi_decl(bi_1pin_with_name(LED_PIN, "On-board LED"));
    bi_decl(bi_1pin_with_name(BTN_PIN, "Button Pin"));
    bi_decl(bi_1pin_with_name(GREEN_LED, "Green LED"));
    bi_decl(bi_1pin_with_name(RED_LED, "Red LED"));
    bi_decl(bi_1pin_with_name(BLUE_LED, "Blue LED"));

    button_box_gpio_init();

    button_box_pwm_init();

    button_box_adc_init();


}

void process_usb_input(const char *input) {
    if (strncmp(input, "set_key_code:", 13) == 0) {
        uint8_t key_code = (uint8_t)strtoul(input + 13, NULL, 10);
        button_key_code = key_code;
    } else if (strncmp(input, "set_hex_code:", 13) == 0) {
        uint32_t new_hex_code = (uint32_t)strtoul(input + 13, NULL, 16);
        hex_code = new_hex_code;
    }
}

void receive_usb_data() {
    char buf[CDC_BUF_SIZE + 1];
    memset(buf, 0, CDC_BUF_SIZE + 1);
    uint32_t num_bytes_read = 0;

    if (tud_cdc_connected()) {
        num_bytes_read = tud_cdc_n_read(0, buf, CDC_BUF_SIZE);
        if (num_bytes_read > 0) {
            buf[num_bytes_read] = 0;  // Ensure null-termination
            process_usb_input(buf);
        }
    }
}

void send_usb_data(uint8_t *data, uint32_t length) {
    if (tud_cdc_connected()) {
        tud_cdc_n_write(0, data, length);
        tud_cdc_n_write_flush(0);
    }
}




int main() {
    Button_Box_Systems_init();


    const float adc_conversion_factor = 3.3f / (1 << 12);
    uint8_t report[3];

    while (true) {

        // Receive serial data over USB
        receive_usb_data();

        // Set the knob value (ADC)
        uint16_t adc_value = adc_read();
        report[0] = adc_value & 0xFF;
        report[1] = adc_value >> 8;

        // Set the button keycode
        if (is_button_pressed()) {
            report[2] = button_key_code;
        } else {
            report[2] = 0;
        }

        // Send report data over USB
        send_usb_data(report, sizeof(report));

        // Set the RGB LED color using the received hex code
        set_button_hex_color(hex_code);

    }

    return 0;
}