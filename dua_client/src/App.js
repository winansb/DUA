import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import ExportPage from "./components/exportDataPage";
import UploadPage from "./components/uploadDataPage";

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
				<Route path="/exportData" element={<ExportPage/>} />
				<Route path="/uploadData" element={<UploadPage/>} />
			</Routes>
		</div>
	);
};

export default App; 