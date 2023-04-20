set(FAMILY rp2040)
set(BOARD pico_sdk)
set(TINYUSB_FAMILY_PROJECT_NAME_PREFIX "tinyusb_dev")
cmake_minimum_required(VERSION 3.13)

# Initialize the SDK based on PICO_SDK_PATH
include(pico_sdk_import.cmake)

# Project name and version
project(Button_Box C CXX ASM)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

# Initialize the Raspberry Pi Pico SDK
add_subdirectory(${PICO_SDK_PATH}/lib/tinyusb EXCLUDE_FROM_ALL)
pico_sdk_init()

# Add source files
add_executable( USB_Button_Box
    src/main.c
    src/main.h
)

# Enable the USB system
pico_enable_stdio_usb( USB_Button_Box 1)

# Add pico_stdlib library which aggregates commonly used features
target_link_libraries(USB_Button_Box pico_stdlib tinyusb_device tinyusb_board tinyusb_class pico_stdlib hardware_pwm hardware_adc)
# Add TinyUSB headers
target_include_directories(USB_Button_Box PRIVATE ${CMAKE_CURRENT_LIST_DIR}/tinyusb/src)


# Create UF2 file as the output. Drag and drop the resultant USB_Button_Box.uf2 file onto the mounted board
pico_add_extra_outputs(USB_Button_Box)