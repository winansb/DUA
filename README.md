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

## Features

- Vehicle UI:

- MVC server:

- Button Box:

## Getting Started

### Prerequisites

- git https://git-scm.com/downloads
- Node.js (version 18.16.0 or higher) https://nodejs.org/en

### Installation

( In the command line )

1. Clone the repository:
   -git clone https://github.com/winansb/DUA.git

2. Install the dependencies:
   (with Node.js installed)
   double click Install Dependencies

   Alternatively in the command line
   -Navigate to /DUA/dua_client/ and use "npm install"
   -Navigate to /DUA/dua_server/ and use "npm install"

3. Start the server:
   Double click the start_server.cmd file
   Or navigate into the dua_server dir and use "npm start"

   You will know the server is working when you see this

   ![Server Running in the command line](./assets/Server_running.png)

4. Start the Client:
   double click the start_client.cmd file
   Or navigate into the dua_client dir and use "npm start"

   ![Web Homepage opening after starting the client](./assets/Home_Page.png)

   You are now running the project!

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
