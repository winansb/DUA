#include "main.h"



int main() {
 
    Button_Box_Systems_init();

    stdio_usb_init();

    uint16_t hex_color = 0x0000; 

    while (1) {
        // Poll the USB stack for incoming data
        char c = getchar(); 
        
        if( prev_button == false && button_pressed == true ){
                set_led_color(0x00FF00); // set LED to green
                puts("Button 1 was pressed \n");
                prev_button == true; 
        }

        // Echo the character back to USB serial
        putchar(c); 
    }

    return 0;
}

