#include "main.h"

// // Button_Box HID Keyboard Report ! 
// typedef struct{
//     uint16_t digitals; // Digital inputs - buttons
//     int16_t analogs[1]; // Analog inputs - Potentiometer used to model slider
// } keyboard_report_t; 

// // Button_Box CDC commands
// // this allows for commands to be sent over serial 
// // to trigger color changes on the button
// typedef struct{
//     uint32_t digitals; 
//     int16_t analogs[1]; 
// } cdc_commands_t;

// // objects for storing the report each interface option should send
// keyboard_report_t button; 
// keyboard_report_t knob; 

// // object to store CDC Command Data
// cdc_commands_t commands; 

// #define ITF_KEYBOARD 0

// void led_blinking_task(void);
// void hid_task(void);

int main() {
 
    Button_Box_Systems_init();

    stdio_usb_init();

    uint32_t hex_code = 0x00000000; 

    const float adc_conversion_factor = 3.3f / (1 << 12);

    uint8_t cdc_buffer[CDC_BUFFER_SIZE];

    while (true) {

            // Check for incoming CDC data
        int bytes_available = usb_cdc_rx_available();
        if (bytes_available > 0) {
        // Read CDC data into buffer
        int bytes_read = usb_cdc_rx(cdc_buffer, bytes_available);
        
        // Parse hex code and set PWM levels for RGB LEDs
        for (int i = 0; i < bytes_read; i += 2) {
            uint8_t channel = cdc_buffer[i];
            uint8_t pwm_value = cdc_buffer[i + 1];
            set_pwm_level(channel, pwm_value);
        }

        if (is_button_pressed()) {
            printf("Button pressed!\n");

            // Toggle the onboard LED
            gpio_put(LED_PIN, !gpio_get(LED_PIN));

            uint16_t result = adc_read();

            printf("Raw value: 0x%03x, voltage: %f V\n", result, result * adc_conversion_factor);

            // the following cascades through red->green->blue from dim to bright to show functionality 
            for (int i = 0; i < 256; i++) {
                uint16_t pwm_value_r = i;
                uint16_t pwm_value_g = 0;
                uint16_t pwm_value_b = 0;
                invert_pwm(&pwm_value_r);
                invert_pwm(&pwm_value_g);
                invert_pwm(&pwm_value_b);
                pwm_set_gpio_level(RED_LED, pwm_value_r);
                pwm_set_gpio_level(GREEN_LED, pwm_value_g);
                pwm_set_gpio_level(BLUE_LED, pwm_value_b);
                sleep_ms(10);
            }
            for (int i = 0; i < 256; i++) {
                uint16_t pwm_value_r = 0;
                uint16_t pwm_value_g = i;
                uint16_t pwm_value_b = 0;
                invert_pwm(&pwm_value_r);
                invert_pwm(&pwm_value_g);
                invert_pwm(&pwm_value_b);
                pwm_set_gpio_level(RED_LED, pwm_value_r);
                pwm_set_gpio_level(GREEN_LED, pwm_value_g);
                pwm_set_gpio_level(BLUE_LED, pwm_value_b);
                sleep_ms(10);
            }
            for (int i = 0; i < 256; i++) {
                uint16_t pwm_value_r = 0;
                uint16_t pwm_value_g = 0;
                uint16_t pwm_value_b = i;
                invert_pwm(&pwm_value_r);
                invert_pwm(&pwm_value_g);
                invert_pwm(&pwm_value_b);
                pwm_set_gpio_level(RED_LED, pwm_value_r);
                pwm_set_gpio_level(GREEN_LED, pwm_value_g);
                pwm_set_gpio_level(BLUE_LED, pwm_value_b);
                sleep_ms(10);
            }
            
        } 
        // this is the hex code to produce an orange ish color, something unique to stand out
        hex_code = 0xEBB33B;
        set_button_hex_color(hex_code); 

        pwm_set_gpio_level(RED_LED, 235);
        pwm_set_gpio_level(GREEN_LED, 179);
        pwm_set_gpio_level(BLUE_LED, 59);

    }

    return 0;
}

// /*-------------------------------------------------------
// src - https://github.com/hathach/tinyusb/blob/master/examples/device/hid_generic_inout/src/main.c
// --------------------------------------------------------*/
// // tiny usb device callbacks
// // Invoked when device is mounted
// void tud_mount_cb(void)
// {
//   blink_interval_ms = BLINK_MOUNTED;
// }

// // Invoked when device is unmounted
// void tud_umount_cb(void)
// {
//   blink_interval_ms = BLINK_NOT_MOUNTED;
// }

// // Invoked when usb bus is suspended
// // remote_wakeup_en : if host allow us  to perform remote wakeup
// // Within 7ms, device must draw an average of current less than 2.5 mA from bus
// void tud_suspend_cb(bool remote_wakeup_en)
// {
//   (void) remote_wakeup_en;
//   blink_interval_ms = BLINK_SUSPENDED;
// }

// // Invoked when usb bus is resumed
// void tud_resume_cb(void)
// {
//   blink_interval_ms = BLINK_MOUNTED;
// }

// // Invoked when received SET_REPORT control request or
// // received data on OUT endpoint ( Report ID = 0, Type = 0 )
// void tud_hid_set_report_cb(uint8_t itf, uint8_t report_id, hid_report_type_t report_type, uint8_t const* buffer, uint16_t bufsize)
// {
//   // This example doesn't use multiple report and report ID
//   (void) itf;
//   (void) report_id;
//   (void) report_type;

//   // echo back anything we received from host
//   tud_hid_report(0, buffer, bufsize);
// }

// //--------------------------------------------------------------------+
// // BLINKING TASK
// //--------------------------------------------------------------------+
// void led_blinking_task(void)
// {
//   static uint32_t start_ms = 0;
//   static bool led_state = false;

//   // Blink every interval ms
//   if ( board_millis() - start_ms < blink_interval_ms) return; // not enough time
//   start_ms += blink_interval_ms;

//   board_led_write(led_state);
//   led_state = 1 - led_state; // toggle
// }

// void hid_task(void)
// {
//   // Poll every 10ms
//   const uint32_t interval_ms = 10;
//   static uint32_t start_ms = 0;

//   if ( board_millis() - start_ms < interval_ms) return; // not enough time
//   start_ms += interval_ms;

//   uint32_t const btn = board_button_read();

//   // Remote wakeup
//   if ( tud_suspended() && btn )
//   {
//     // Wake up host if we are in suspend mode
//     // and REMOTE_WAKEUP feature is enabled by host
//     tud_remote_wakeup();
//   }

//   /*------------- Keyboard -------------*/
//   if ( tud_hid_n_ready(ITF_KEYBOARD) )
//   {
//     // use to avoid send multiple consecutive zero report for keyboard
//     static bool has_key = false;

//     if ( btn )
//     {
//       uint8_t keycode[6] = { 0 };
//       keycode[0] = HID_KEY_I;

//       tud_hid_n_keyboard_report(ITF_KEYBOARD, 0, 0, keycode);

//       has_key = true;
//     }else
//     {
//       // send empty key report if previously has key pressed
//       if (has_key) tud_hid_n_keyboard_report(ITF_KEYBOARD, 0, 0, NULL);
//       has_key = false;
//     }
//   }
// }