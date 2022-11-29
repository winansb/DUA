import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import VideoPageOne from "./components/displayVideo";
import Trial_1 from "./components/inVehicleAgent";


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
				<Route path="/agent" element={<Trial_1/>}/>

				<Route path="/storage" element={<StorageTestPage/> }/>

			</Routes>
		</div>
	);
};

export default App; 