# DUA
This is the repository for CEN3907C Senior Design Project DUA


Story Boards: 
https://www.figma.com/file/fyXDsA3Gs1XOVCoAQr7neX/story-boards-dua?node-id=0%3A1

We are currently in the Pre-Alpha stage of our project. This project runs using a
webstack containing SQLite3, Express, React, and Node.js. SQLite3 was preferred over 
other databases to allow for easier file translation (CSV, etc.)

## Pre-Alpha Build Summary:

### External Interface: 
React we application that allows for navigation of skeleton site

### Persistent State:
SQLite db setup to support server end. clicks saved from prior sessions
are shown on bootup of site/storage page. 

### Internal Systems: 
SQL lite encorporated with React, node.js. Bootstrap used to simplify visuals. 
All internal systems are linked and working on a local machine. 

### Communication: 
Server-client communication succesful from proof of concept html get post test.
Received clicks in relation to a session ID across boot up by querying the 
server. Changes are reflected in realtime on the app. 
### Integrity & Resilience:
Using bootstrap allows for more responsive, resilient UI, capable of resizing to any 
screensize while mainting visually pleasing ratios. To increase performance on varied
hardware bases code is being implemented to only update parts of the screen that
change to save reasources. Additionally, a method to buffer and split pre-loading
between videos used in trials with the site is underworks to assure no staggering will
occure during trials. 

## Front-End
With the use of React and Node, this project runs a web-app with a 
few simple skeleton of some pages. These pages are meant as an early draft
for sharing with The Reed Lab as we determine what features will make it 
into the final draft and the procedure that will define trials. 
+into the final draft and the procedure that will define trials. 

## Back-End
SQLite database built with Express routing. Runs on port 8000 and uses HTTP
communication protocol. Currently basic read/write functionality and testing
page can be accessed at `./storage`.

## Compilation and Testing
DUA runs using the REST API, so for testing purposes currently requires that the
client and server be run independently.
Client will run on **PORT 3000** and can be ran locally using:
```
cd dua_client
npm start
```

Server will run on **PORT 8000** and can be ran locally using:
```
cd dua_server
node server.js
```

**Running both of these node processes at the same time is vital for full functionality**

As the project continues to be developed, more features will be unavailable if both are not
ran at the same time, please do so when testing! Eventually a singular script will be written 
to run both simultaneously.


## Dependencies from scratch
Download node.js  (npm) using the online installer
Clone repo 
Force fix any updated dependency issues if any

install these dependencies  
  Express:
    npm install express
  Sass:
    npm install sass

Project will be ready for compilation and testing