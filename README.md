# DUA
This is the repository for CEN3907C Senior Design Project DUA


Story Boards: 
https://www.figma.com/file/fyXDsA3Gs1XOVCoAQr7neX/story-boards-dua?node-id=0%3A1

We are currently in the Pre-Alpha stage of our project. This project runs using a
MERN stack (MongoDB, Express, React, Node.js), MongoDB may be removed in later 
iterations as it is currently not needed. 

Front-End
With the use of Express, React and Node, this project runs a web-app with a 
few simple skeleton of some pages. These pages are meant as an early draft
for sharing with The Reed Lab as we determine what features will make it 
into the final draft and the procedure that will define trials. 

Pre-Alpha Build Summary:

External Interface: 
	React we application that allows for navigation of skeleton site

Persistent State:
	SQLite db setup to support server end. clicks saved from prior sessions
	are shown on bootup of site/storage page. 

Internal Systems: 
	SQL lite encorporated with React, node.js. Bootstrap used to simplify visuals. 
	All internal systems are linked and working on a local machine. 

Communication: 
	Server-client communication succesful from proof of concept html get post test.
	Received clicks in relation to a session ID across boot up by querying the 
	server. Changes are reflected in realtime on the app. 

Integrity & Resilience:
	Using bootstrap allows for more responsive, resilient UI, capable of resizing to any 
	screensize while mainting visually pleasing ratios. To increase performance on varied
	hardware bases code is being implemented to only update parts of the screen that
	change to save reasources. Additionally, a method to buffer and split pre-loading
	between videos used in trials with the site is underworks to assure no staggering will
	occure during trials. 

//More in depth information about the server side of the project can be found on the dataStorage readme