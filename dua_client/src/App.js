import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import TestVideoDisplay from "./components/TestDisplay";
import TestInteractables from "./components/TestInteractables";
import DualScreen from "./components/dualScreen"


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


				<Route path="/TestVideoDisplay" element={<TestVideoDisplay/>} />
				<Route path="/agent" element={<TestInteractables/>}/>

				<Route path="/storage" element={<StorageTestPage/> }/>

				<Route path="/dualScreen" element={<DualScreen/>} />

			</Routes>
		</div>
	);
};

export default App; 