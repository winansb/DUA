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
	|-assest
		|- * All content used in documentation *
	|-Button_Box
		|-src
			|-communication.h*
			|-main.c
			|-main.h
		|-CMakeLists.txt
		|-pic_sdk_import.cmake
		|-README.md
	|-docs
		|-creating_db_tables.md
		|-creating_new_trial_scenario.md
		|-creating_unit_tests.md
	|-dua_client
		|-public
			|-index.html
		|-src
			|-assets
				|- * All videos and images used for testing *
			|-controllers
				|-participantController.js
				|-screenController.js
				|-tapController.js
				|-testController.js
			|-css*
			|-redux
				|-actions
					|-participantActions.js
					|-screenActions.js
					|-tapActions.js
					|-testActions.js
					|-trialActions.js
				|-reducers
					|-participantReducer.js
					|-screenReducer.js
					|-tapReducer.js
					|-testReducer.js
					|-trialReducer.js
			|-views
				|-components
					|-IVA_Components
						|-Detour
							|- * All Content Related to Detour Scenario * 
						|-Trial_Info
							|- TrialInformation.js * component for coordinating scenarios * 
						|-Buttoncolumn.js
						|-DefaultDisplay.js
						|-InteractiveMap_INCOMPLETE.js*
						|-TrialScreenNotif.js
						|-TrialScreen.js
						|-TrialScreenCall.js
						|-TrialScreenInformation.js
						|-TrialScreenrompt.js
						|-TripTravelTime.js
						|-VehicleDate.js
						|-VehicleUI.js
					|-ColorPicker.js
					|-FunctionButton.js
					|-GeneralModal.js
					|-KeyCodeGetter.js
					|-NavButton.js
					|-ParticipantConfirmForm.js
					|-ParticipantSubmitForm.js
					|-ParticipantTable.js
					|-ReturnButton.js
					|-Trial.js
					|-TrialButton.js
				|-ButtonBoxGUI.js
				|-ExportToCSV.js*
				|-HomePage.js
				|-ParticipantWaiting.js
				|-TrialRun.js
				|-TrialSetup.js
				|-TrialVideo.js
				|-TrialWrapper.js
			|-apiRoutes.js
			|-App.js
			|-index.js
			|-store.js
			|-styles.css*
		|-config.env
		|-Dockerfile
		|-package-lock.json
		|-package.json
	|-dua_server
		|-api
			|-controllers
				|- __test__
					|-participantController.test.js
					|-screenController.test.js
					|-tapController.test.js
					|-testController.test.js			
				|-participantController.js
				|-screenController.js
				|-tapController.js
				|-testController.js
			|-models
				|-Participant.js
				|-Screen.js
				|-Tap.js
				|-Test.js
			|-api.js
	
		|-config
			|-database.js
		|-db
			|-initializer.js
		|-config.env
		|-Dockerfile
		|-package-lock.json
		|-package.json
		|-server.js
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