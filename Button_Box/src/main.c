#include "main.h"


int main() {
 
    Button_Box_Systems_init();

    stdio_usb_init();



    while (true) {
        if (is_button_pressed()) {
            printf("Button pressed!\n");

            // Toggle the onboard LED
            gpio_put(LED_PIN, !gpio_get(LED_PIN));

            uint8_t red, green, blue;
            hex_to_rgb(0xFFFFFF, &red, &green, &blue);
            set_rgb_color(red, green, blue);
            
        } 
    }

    return 0;
}

