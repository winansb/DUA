#include "main.h"

static const uint8_t HID_ReportDescriptor[] = {
    0x05, 0x01,                    // Usage Page (Generic Desktop)
    0x09, 0x05,                    // Usage (Game Pad)
    0xA1, 0x01,                    // Collection (Application)
    0x15, 0x00,                    // Logical Minimum (0)
    0x26, 0xFF, 0x00,              // Logical Maximum (255)
    0x75, 0x08,                    // Report Size (8)
    0x95, 0x02,                    // Report Count (2)
    0x81, 0x02,                    // Input (Data,Var,Abs) - Two 8 bit values (buttons)
    0x75, 0x08,                    // Report Size (8)
    0x95, 0x01,                    // Report Count (1)
    0x81, 0x01,                    // Input (Const,Array,Abs) - Padding for 1 bit
    0x75, 0x10,                    // Report Size (16)
    0x95, 0x01,                    // Report Count (1)
    0x15, 0x00,                    // Logical Minimum (0)
    0x26, 0xFF, 0x03,              // Logical Maximum (1023)
    0x09, 0x30,                    // Usage (X)
    0x81, 0x02,                    // Input (Data,Var,Abs) - 16 bit value (knob)
    0xC0                           // End Collection
};

#define CDC_BUFFER_SIZE 64

communication_init(){

    // Initialize HID & CDC
    hid_init();
    usb_cdc_init();

    // Create HID report buffer
    uint8_t report_buffer[3];

    // Set button value to "I" key code (0x04)
    report_buffer[0] = 0x00;
    report_buffer[1] = 0x04;

    // Set knob value (replace "knob_value" with your actual knob value)
    uint16_t knob_value = ...;
    report_buffer[2] = knob_value & 0xFF;
    report_buffer[3] = (knob_value >> 8) & 0xFF;

    // Send HID report
    hid_send_report(HID_REPORT_ID_GAMEPAD, report_buffer, sizeof(report_buffer));
}