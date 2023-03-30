#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/pwm.h"
#include "pico/binary_info.h"
#include "pico/stdio_usb.h"


//defines
#define GREEN_LED 5
#define RED_LED 6
#define BLUE_LED 9

#define LED_PIN 13
#define BTN_PIN 10

#define DEBOUNCE_DELAY_US 10000 // 10ms debounce delay


// Helper function to set the RGB color using PWM
void set_rgb_color(uint8_t red, uint8_t green, uint8_t blue) {
    pwm_set_gpio_level(RED_LED, red);
    pwm_set_gpio_level(GREEN_LED, green);
    pwm_set_gpio_level(BLUE_LED, blue);

}

// Helper function to decompile hex color code into RGB components
void hex_to_rgb(uint32_t hex_code, uint8_t *red, uint8_t *green, uint8_t *blue) {
    *red = (hex_code >> 16) & 0xFF;
    *green = (hex_code >> 8) & 0xFF;
    *blue = hex_code & 0xFF;
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

void button_box_gpio_init(){

    // Set up the GPIO pins for the LEDs
    gpio_init(GREEN_LED);
    gpio_set_function(GREEN_LED, GPIO_FUNC_PWM);
    gpio_set_dir(GREEN_LED, GPIO_OUT);
    
    gpio_init(RED_LED);
    gpio_set_function(RED_LED, GPIO_FUNC_PWM);
    gpio_set_dir(RED_LED, GPIO_OUT);
    
    gpio_init(BLUE_LED);
    gpio_set_function(BLUE_LED, GPIO_FUNC_PWM);
    gpio_set_dir(BLUE_LED, GPIO_OUT);

    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);

    gpio_init(BTN_PIN);
    gpio_set_dir(BTN_PIN, GPIO_IN);
    gpio_pull_up(BTN_PIN); 

    // Enable GPIO interrupt for BTN_PIN
    // gpio_set_irq_enabled_with_callback(BTN_PIN, GPIO_IRQ_EDGE_RISE | GPIO_IRQ_EDGE_FALL, true, &button_irq_handler);

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

    pwm_config_set_clkdiv(&config, 4.f);

    // pwm_set_wrap(r_slice, 3);
    // pwm_set_wrap(g_slice, 3);
    // pwm_set_wrap(b_slice, 3);
    //pwm_set_chan_lvel(r_slice, PWM_CHAN_A, 1);

    pwm_init(r_slice, &config, true);
    pwm_init(g_slice, &config, true);
    pwm_init(b_slice, &config, true);

}

void Button_Box_Systems_init(){

    stdio_init_all();
    bi_decl(bi_program_description("Button_Box"));
    bi_decl(bi_1pin_with_name(LED_PIN, "On-board LED"));
    bi_decl(bi_1pin_with_name(BTN_PIN, "Button Pin"));
    bi_decl(bi_1pin_with_name(GREEN_LED, "Green LED"));
    bi_decl(bi_1pin_with_name(RED_LED, "Red LED"));
    bi_decl(bi_1pin_with_name(BLUE_LED, "Blue LED"));

    button_box_gpio_init();

    button_box_pwm_init();

}

