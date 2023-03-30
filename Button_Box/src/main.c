#include "main.h"


int main() {
 
    Button_Box_Systems_init();

    stdio_usb_init();

    uint32_t hex_code = 0x00000000; 

    const float conversion_factor = 3.3f / (1 << 12);

    while (true) {
        

        if (is_button_pressed()) {
            printf("Button pressed!\n");

            // Toggle the onboard LED
            gpio_put(LED_PIN, !gpio_get(LED_PIN));

            hex_code = 0x0000FFFF;
            //set_button_hex_color(hex_code); 

            pwm_set_gpio_level(RED_LED, 0xFF);
            pwm_set_gpio_level(GREEN_LED, 0x0);
            pwm_set_gpio_level(BLUE_LED, 0x0);

            uint16_t result = adc_read();

            printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor);

            sleep_ms(500);
            
        } 
        // hex_code = 0x00FF00FF; 
        // set_button_hex_color(hex_code); 

        pwm_set_gpio_level(RED_LED, 0x0);
        pwm_set_gpio_level(GREEN_LED, 0xFF);
        pwm_set_gpio_level(BLUE_LED, 0x0);

    }

    return 0;
}

