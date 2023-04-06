import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage";
import TrialSetup from "./views/TrialSetup";
import ExportPage from "./views/ExportToCSV";
import DeviceGUIPage from "./views/ButtonBoxGUI";

const App = () => 
{
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/trial-setup" element={<TrialSetup />} />
				<Route path="/export-csv" element={<ExportPage />} />
				<Route path="/device-gui" element={<DeviceGUIPage />} />

			</Routes>
		</div>
	);
};

export default App; 