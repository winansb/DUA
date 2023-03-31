set(FAMILY rp2040)
set(BOARD pico_sdk)
set(TINYUSB_FAMILY_PROJECT_NAME_PREFIX "tinyusb_dev")
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

# Add your source files here
add_executable( USB_Button_Box
    src/main.c
    src/main.h
)

# enable the usb system
pico_enable_stdio_usb( USB_Button_Box 1)


# uncomment the following to work on tinyUSB implementation

# target_sources( USB_Button_Box PRIVATE
#     src/usb_descriptors.c
# )

# Add pico_stdlib library which aggregates commonly used features
target_link_libraries(USB_Button_Box 
    pico_stdlib 
    hardware_pwm 
    hardware_adc
      ) 

# create UF2 file as the output. Drag and drop the resultant USB_Button_Box.uf2 file onto the mounted board
pico_add_extra_outputs(USB_Button_Box)



      #Add the below pieces to the above statement to compile tinyUSB work
      #tinyusb_device tinyusb_board tinyusb_host tinyusb_hid
