#ifndef COMMUNICATION_H
#define COMMUNICATION_H

#include "main.h"

// HID Report Descriptor
extern const uint8_t HID_ReportDescriptor[];
extern uint8_t button_key_code; // Default key code
extern uint32_t hex_code;       // Default hex code

// Buffer size for the CDC communication
#define CDC_BUFFER_SIZE 64

// Function prototypes
void communication_init(void); // Initialize the communication (HID and CDC)
void hid_send_report(uint8_t report_id, uint8_t *report_data, uint16_t report_length); // Send an HID report

#endif // COMMUNICATION_H