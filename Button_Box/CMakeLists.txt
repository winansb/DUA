cmake_minimum_required(VERSION 3.13)

# initialize the SDK based on PICO_SDK_PATH
# note: this must happen before project()
include(pico_sdk_import.cmake)

# Project name and version
project(Button_Box C CXX ASM)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

# initialize the Raspberry Pi Pico SDK
pico_sdk_init()

# Project added below

if (TARGET tinyusb_device)
    add_executable( USB_Button_Box
            src/main.c
            )

    # enable the usb system
    pico_enable_stdio_usb( USB_Button_Box 1)

    # disable the UART system
    pico_enable_stdio_uart( USB_Button_Box 0)

    # create UF2 file as the output. Drag and drop the resultant USB_Button_Box.uf2 file onto the mounted board
    pico_add_extra_outputs(USB_Button_Box)

    # Add pico_stdlib library which aggregates commonly used features
    target_link_libraries(USB_Button_Box pico_stdlib hardware_pwm ) #tinyusb_device tinyusb_board tinyusb_host tinyusb_hid

elseif(PICO_ON_DEVICE)
    message(WARNING "not building USB_Button_Box because TinyUSB submodule is not initialized in the SDK")
endif()