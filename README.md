# Reed Laboratory Trials Management System

The Reed Laboratory Trials Management System is a client-server application developed for The Reed Laboratory at the University of Florida. It is designed to help perform trials in an ongoing study by providing an easy-to-use interface for managing and collecting trial data.

## Technologies Used

- React
- Node.js
- Express
- Sequelize (ORM)
- SQLite
- Redux
- Axios
- Styled Components
- Docker

## Features

- Client Application:

- Server Application:

- Button Box:

## Getting Started

### Prerequisites

- Docker (latest version) https://www.docker.com/get-started
- git https://git-scm.com/downloads

### Installation

( In the command line )

1. Clone the repository:
   -git clone https://github.com/winansb/DUA.git (alternatively download from this link)

2. Double click Start.cmd in the DUA folder

3. You can now access the project by opening your browser and inputting 'localhost'
![Typing localhost into the navigation bar of google chrome](./assets/Navigation.png)

4. You are now running the project and should see this page 

   ![Web Homepage opening after starting the client](./assets/Home_Page.png)

## Usage

## Server API Reference

## How to Edit Trials

Trials are composed from a series of components generated from one array per a trial. Arrays can be as long or short as you like and cover three basic screens. To create a new screen or edit old ones navigate to dua_client/src/views/components/IVA_Components/Trial_Info/TrialInformation.js. This file contains the three arrays responsible for defining trial behavior. There are DetourScreens, DetourScreenTimings, and detourPauses and the equivalent for the breakdown test. Simply edit the text in these files and save them for most changes.

### Information Screen

![Code for making an Information Trial Screen](./assets/Information_screen_code.png)

Displays an Ok button and text to the user
-type: "Information",
-content: "any text in double qutes that you want to show on the screen."
-nextIndex: The index of the next screen within the 'test'Screens array to show after this screen is finished. If you want Detour2 to display as the next screen after the user presses okay you would but 1 here.
-screenName: the name used for data collection techniques when communicating on what sreen something happened such as action initiated. Detour1_Ok.
-displayTimeSeconds: integer describing the seconds this screen should stay open for before closing.

### Prompt Screen

Displays Yes or no option, takes 'content' as an argument. This is a jsx object that portrays what will show on the screen that pops up during the trial over the default UI.

-

### Notif Screen

### Editing Trials

## Contributing

## Project File Structure
```
├─ .gitignore
├─ .prettierignore
├─ assets
  ├─ Home_Page.png
  ├─ Information_screen_code.png
  ├─ Navigation.png
  ├─ Server_running.png
├─ Button_Box
  ├─ CMakeLists.txt
  ├─ pico_sdk_import.cmake
  ├─ README.md
  ├─ src
    ├─ communication.h
    ├─ main.c
    ├─ main.h
├─ docker-compose.yml
├─ docs
  ├─ button_box.md
  ├─ communication.md
  ├─ components.md
  ├─ creating_db_tables.md
  ├─ creating_new_trial_scenario.md
  ├─ creating_unit_tests.md
  ├─ database.md
  ├─ docker.md
  ├─ redux.md
├─ dua_client
  ├─ config.env
  ├─ Dockerfile
  ├─ package-lock.json
  ├─ package.json
  ├─ public
    ├─ index.html
    ├─ manifest.json
  ├─ src
    ├─ apiRoutes.js
    ├─ App.js
    ├─ assets
      ├─ Breakdown_Breakdown.mp4
      ├─ Breakdown_Not_Pull_Over.mp4
      ├─ Breakdown_Pull_Over.mp4
      ├─ CarSettings.png
      ├─ DetourMap.png
      ├─ Detour_Construction.mp4
      ├─ Detour_Home.mp4
      ├─ Detour_Waffle_House.mp4
      ├─ Detour_Walgreen.mp4
      ├─ EntertainmentApp.png
      ├─ HomeMap.png
      ├─ PhoneApp.png
      ├─ PhoneButton.png
      ├─ PhoneCallEnd.png
      ├─ PhoneScreen.png
      ├─ Roadside_AssistancePhoneCall.png
      ├─ StartMap.png
      ├─ TwoPhones.png
      ├─ WaffleHouseMap.png
    ├─ controllers
      ├─ participantController.js
      ├─ screenController.js
      ├─ tapController.js
      ├─ testController.js
      ├─ trialController.js
    ├─ css
      ├─ styles.css
    ├─ index.js
    ├─ models
      ├─ screen.js
      ├─ trial.js
    ├─ redux
      ├─ actions
        ├─ participantActions.js
        ├─ screenActions.js
        ├─ tapActions.js
        ├─ testActions.js
        ├─ trialActions.js
      ├─ reducers
        ├─ participantReducer.js
        ├─ screenReducer.js
        ├─ tapReducer.js
        ├─ testReducer.js
        ├─ trialReducer.js
    ├─ store.js
    ├─ styles.css
    ├─ views
      ├─ components
        ├─ ButtonBoxGUI
          ├─ ColorPicker.js
          ├─ KeyCodeGetter.js
        ├─ Forms
          ├─ ParticipantConfirmForm.js
          ├─ ParticipantInputForm.js
          ├─ ParticipantSubmitForm.js
        ├─ General
          ├─ FunctionButton.js
          ├─ GeneralModal.js
          ├─ NavButton.js
          ├─ ReturnButton.js
        ├─ TrialScreens
          ├─ Detour
            ├─ Detour10Content.js
            ├─ Detour3Content.js
            ├─ Detour4Content.js
            ├─ Detour5Content.js
            ├─ Detour6Content.js
            ├─ Detour7Content.js
            ├─ Detour8Content.js
            ├─ Detour9Content.js
            ├─ DetourGoogleMaps.js
          ├─ Trial.js
          ├─ Trial_Info
            ├─ TrialInformation.js
        ├─ TrialSetup
          ├─ ParticipantTable.js
          ├─ TrialButton.js
        ├─ TrialVideos
        ├─ VehicleUI
          ├─ ButtonColumn.js
          ├─ DefaultDisplay.js
          ├─ InteractiveMap_INCOMPLETE.js
          ├─ TrialScreen.js
          ├─ TrialScreenCall.js
          ├─ TrialScreenInformation.js
          ├─ TrialScreenNotif.js
          ├─ TrialScreenPrompt.js
          ├─ TripTravelTime.js
          ├─ VehicleDate.js
      ├─ DataWrapper.js
      ├─ screens
        ├─ ButtonBoxGUI.js
        ├─ ExportToCSV.js
        ├─ HomePage.js
        ├─ TrialRun.js
        ├─ TrialSetupContainer.js
        ├─ TrialVideoContainer.js
        ├─ VehicleUIContainer.js
├─ dua_server
  ├─ api
    ├─ api.js
    ├─ controllers
      ├─ participantController.js
      ├─ screenController.js
      ├─ tapController.js
      ├─ testController.js
      ├─ __tests__
        ├─ participantController.test.js
        ├─ screenController.test.js
        ├─ tapController.test.js
        ├─ testController.test.js
    ├─ models
      ├─ Participant.js
      ├─ Screen.js
      ├─ Tap.js
      ├─ Test.js
  ├─ config.env
  ├─ configDB
    ├─ database.js
  ├─ db
    ├─ initializer.js
    ├─ Trial_Data.db
  ├─ Dockerfile
  ├─ package-lock.json
  ├─ package.json
  ├─ README.md
  ├─ server.js
├─ file_structure.py
├─ README.md
├─ Start.cmd
├─ Stop.cmd
```

## Documentation

- [Communication](./docs/communication.md)
- [Button Box](./docs/button_box.md)
- [Redux](./docs/redux.md)
- [Components](./docs/components.md)
- [Docker](./docs/docker.md)
- [Database](./docs/database.md)
- [DUA Server](./dua_server/README.md)
- [Creating DB Tables](./docs/creating_db_tables.md)
- [Creating New Trial Scenarios](./docs/creating_new_trial_scenario.md)
- [Creating Unit Tests](./docs/creating_unit_tests.md)