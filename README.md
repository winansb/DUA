# DUA
This is the repository for CEN3907C Senior Design Project DUA


Story Boards: 
https://www.figma.com/file/fyXDsA3Gs1XOVCoAQr7neX/story-boards-dua?node-id=0%3A1

We are currently in the Pre-Alpha stage of our project. This project runs using a
webstack containing SQLite3, Express, React, and Node.js. SQLite3 was preferred over 
other databases to allow for easier file translation (CSV, etc.) 

### Front-End
With the use of React and Node, this project runs a web-app with a 
few simple skeleton of some pages. These pages are meant as an early draft
for sharing with The Reed Lab as we determine what features will make it 
into the final draft and the procedure that will define trials. 

### Back-End
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
