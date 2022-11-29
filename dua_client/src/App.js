import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import VideoPageOne from "./components/displayVideo";
import Trial1 from "./components/inVehicleAgent";
import Trial2 from "./components/IAV2";
import Trial3 from "./components/IAV3";
import Trial4 from "./components/IAV4";
import Trial5 from "./components/IAV5";

// Delete later, just for testing
import StorageTestPage from "./components/storageTest";

const App = () => 
{
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<WelcomePage />} />
				<Route path="/waiting" element={<WaitingPage />} />
				<Route path="/testingSetup" element={<TestSetupPage />} />
				<Route path="/placeHolder" element={<PlaceHolderPage />} />
				<Route path="/adminSetup" element={<AdminPage/>} />
				<Route path="/videoDisplay" element={<VideoPageOne/>} />
				<Route path="/agent" element={<Trial1/>}/>

				<Route path="/IAV2" element={<Trial2/>}/>
				<Route path="/IAV3" element={<Trial3/>}/>
				<Route path="/IAV4" element={<Trial4/>}/>
				<Route path="/IAV5" element={<Trial5/>}/>

				<Route path="/storage" element={<StorageTestPage/> }/>

			</Routes>
		</div>
	);
};

export default App; 