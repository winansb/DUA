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


//variables
volatile bool button_pressed = false;
volatile bool prev_button  = false;

void set_led_color(uint16_t hex_color) {
    uint8_t r = (hex_color >> 8) & 0xFF; // Extract red component
    uint8_t g = hex_color & 0xFF; // Extract green component
    uint8_t b = (hex_color >> 16) & 0xFF; // Extract blue component

    pwm_set_chan_level(pwm_gpio_to_slice_num(GREEN_LED), PWM_CHAN_A, g);
    pwm_set_chan_level(pwm_gpio_to_slice_num(RED_LED), PWM_CHAN_A, r);
    pwm_set_chan_level(pwm_gpio_to_slice_num(BLUE_LED), PWM_CHAN_A, b);
}


// code that runs when button is pressed 
void set_button_pressed() {

    button_pressed = true;
}

// code that runs when button is released
void unset_button_pressed() {

    button_pressed = false;
    prev_button = false; 
}


void button_irq_handler(uint gpio, uint32_t events) {
    if (gpio == BTN_PIN) {
        if (events & GPIO_IRQ_EDGE_FALL) {
            set_button_pressed();
        }
        if (events & GPIO_IRQ_EDGE_RISE) {
            unset_button_pressed();
        }
    }
}

void button_box_gpio_init(){

    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    gpio_init(BTN_PIN);
    gpio_set_dir(BTN_PIN, GPIO_IN);
    // Enable GPIO interrupt for BTN_PIN
    gpio_set_irq_enabled_with_callback(BTN_PIN, GPIO_IRQ_EDGE_RISE | GPIO_IRQ_EDGE_FALL, true, &button_irq_handler);

}

void button_box_pwm_init(){

    pwm_config config = pwm_get_default_config();

    // Tell led gpio pins they are used by the pwm module 
    gpio_set_function(RED_LED, GPIO_FUNC_PWM);
    gpio_set_function(GREEN_LED, GPIO_FUNC_PWM);
    gpio_set_function(BLUE_LED, GPIO_FUNC_PWM);

    // Find out which PWM slice is connected to the led pins
    uint red_slice = pwm_gpio_to_slice_num(RED_LED);
    uint green_slice = pwm_gpio_to_slice_num(GREEN_LED);
    uint blue_slice = pwm_gpio_to_slice_num(BLUE_LED);

    pwm_init(red_slice, &config, true);
    pwm_init(green_slice, &config, true);
    pwm_init(blue_slice, &config, true);

    pwm_set_wrap(pwm_gpio_to_slice_num(GREEN_LED), 255);
    pwm_set_wrap(pwm_gpio_to_slice_num(RED_LED), 255);
    pwm_set_wrap(pwm_gpio_to_slice_num(BLUE_LED), 255);

    pwm_set_enabled(pwm_gpio_to_slice_num(GREEN_LED), true);
    pwm_set_enabled(pwm_gpio_to_slice_num(RED_LED), true);
    pwm_set_enabled(pwm_gpio_to_slice_num(BLUE_LED), true);

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

