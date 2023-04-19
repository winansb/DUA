#include "pico/stdlib.h"
#include "pico/stdio_usb.h"
#include "pico/binary_info.h"
#include "hardware/adc.h"
#include "hardware/pwm.h"
#include "hardware/gpio.h"
#include "pico/time.h"
#include <string.h>
#include <stdio.h>
#include "tusb.h"



//defines
#define GREEN_LED 7
#define RED_LED 8
#define BLUE_LED 9

#define LED_PIN 13
#define BTN_PIN 10

#define POT_PIN 26 

#define DEBOUNCE_DELAY_US 10000 // 10ms debounce delay



