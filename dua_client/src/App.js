import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import TestVideoDisplay from "./components/TestDisplay";
import TestInteractables from "./components/Agent";
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
				<Route path="/placeHolder" element={<PlaceHolderPage />} />
				<Route path="/testingSetup" element={<AdminPage/>} />


				<Route path="/TestVideoDisplay" element={<TestVideoDisplay/>} />
				<Route path="/agent" element={<TestInteractables/>}/>

				<Route path="/dualscreen" element={<DualScreen />}/>

				<Route path="/storage" element={<StorageTestPage/> }/>


			</Routes>
		</div>
	);
};

export default App; 