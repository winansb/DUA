# DUA
This is the repository for CEN3907C Senior Design Project DUA


Story Boards: 
https://www.figma.com/file/fyXDsA3Gs1XOVCoAQr7neX/story-boards-dua?node-id=0%3A1

We are currently in the Prototype stage of our project. This project runs using a
webstack containing SQLite3, Express, React, and Node.js. SQLite3 was preferred over 
other databases to allow for easier file translation (CSV, etc.)

## Proto-Type:

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
Two methods for Implementing Test partially completed: 
  Separate screen approach: 
    -Use axios handlers for get and post requests between pages 
    which initiate changes on the separate pages

    cons: Slow, delays tested around 2-300ms from home setup. Some functionality
    must be compromised for this approach.
    benefits: both screens can be full screened for potentially more immersive
    experience 

  Dual screen appraoch: 
    -Use a single page but span it across the length of the monitors to 
    create a dual screen responsive webpage. CSS identifies both monitors 
    and scales the testing interface to fit. 

    cons: if monitors cannot be recognized by the graphics cards of the setup
    there will be no full screen capability. May have to use windows features
    to change resolution of one screen to match the other. 

    pros: Far easier to program interactions and test logic for. No functionality
    loss. No delays. More granualar control over actions taken during test. If 
    setup can recognize both monitors for advanced controls, page can even be
    fullscreened across both monitors. 

    possible additonal fix: install dual monitor tools as potential work around 

Dual Screen appraoch currently has pausing implemented on spacebar and allows
for switching between videos using 1,2,3,4. Use 5 to turn IVA screen off and on.
Same approach used to swap between test videos except display: none is used 
instead of display:hidden as this allows videos to transition with fade effect 
while IVA screens change immedietely. This also makes it so that IVA screens 
don't overlay each other and cause clicks for one screen to register on another 
screen. 

--current issue with Dual Screen. When IVA screen turns off, place holder
doesn't fill the blank space and the Video ports to the left side. This should 
be fixed when additional screens are attatched to toggle on as the prior toggles
off. 

### Proof/Prior art for dual screen:
https://www.youtube.com/watch?v=DXrZWsqXPVc&ab_channel=Microsoft365Developer
additionally,
https://learn.microsoft.com/en-us/dual-screen/web/css-viewport-segments


Removed SCSS in favor of Aphrodite as this module allows IVA screen imports to be 
a single file instead of two files across different folders. This improves
the pipeline and decreases the load for next semester when we want to accept 
a .js file outputted by pxcode and retrofit it to new IVA screen callable in the
test Interface by a key based on user input. 

Attempted to introduce react-app-rewired and customize-cra to allow for a 
reconfigurable file path which would make imported assets from pxcode require 
no additional to run properly. This approach postponed till next semester due
to complexity and lack of short-term payoff while trying to deliver 
fuller prototype for early pilot trials. 



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
Clone the repo for this project 

Now, using Node.js install these dependencies  

  Express:
    npm install express

  Sass:      
    npm install sass

  Aphrodite:
    npm install aphrodite 

use npm install i --force in project folder to fix any updated dependency issues if any

Project will be ready for compilation and testing


Hardware Info:
  IVA display: 
    aspect ratio 3:2 
    View port dimensions: 1920 x 1280 
    touchscreen
    set windows scaling 100%! - missing this detail caused a lot of greif,
      new computers are set to 200% scaling. 

  Video Dispaly:
    FooWin usb-c enabled monitor 


##In-Lab Work: 
  -Installed project onto laptop under Mahtab's account so it can be used
  and easily updated by downloading the repo from our github. This way updates
  can be posted from a distance and easily implemented without help from here 
  on out. This requried general trouble shooting with the UF firewall and getting
  permission from UF IT to allow our project to download dependencies from here
  on out. Now we can update the dependencies to the project without causing 
  unintended compilation errors on the lab computer.

  -Meeting scheduled for this Friday to show functionality of test using database table. 
  Database table will represent a single test. Test points will be checked at each critical
  moment where a decision must be made. Choices made during the test and before the test
  will determine what video is played at decision points through post commands to the 
  database table. At decision points get commands will run to query the decision. Pausing 
  functionality has been reduced due to general lag. The test can be paused by the 
  user clicking on the video display and hitting space but they cannot pause the video 
  from the interactive tab due to polling delays being unwanted and the general ease
  of the alternative. Media elements on the test are not to be implimented until 
  the middle of January with the completion of test scenarios and videos for test 
  scenarios. 


