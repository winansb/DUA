import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import WaitingPage from "./components/trialLandingPage";
import TestSetupPage from "./components/trialSetup";
import PlaceHolderPage from "./components/placeHolderPage";
import AdminPage from "./components/adminPage";
import VideoPageOne from "./components/displayVideo";
import Trial0 from "./components/IAV0";
import Trial1 from "./components/IAV1";
import Trial2 from "./components/IAV2";
import Trial3 from "./components/IAV3";
import Trial4 from "./components/IAV4";
import Trial5 from "./components/IAV5";
import Trial6 from "./components/IAV6";
import Trial7 from "./components/IAV7";
import Trial8 from "./components/IAV8";
import Trial9 from "./components/IAV9";
import Trial10 from "./components/IAV10";

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

				<Route path="/IAV0" element={<Trial0/>}/>
				<Route path="/IAV1" element={<Trial1/>}/>
				<Route path="/IAV2" element={<Trial2/>}/>
				<Route path="/IAV3" element={<Trial3/>}/>
				<Route path="/IAV4" element={<Trial4/>}/>
				<Route path="/IAV5" element={<Trial5/>}/>
				<Route path="/IAV6" element={<Trial6/>}/>
				<Route path="/IAV7" element={<Trial7/>}/>
				<Route path="/IAV8" element={<Trial8/>}/>
				<Route path="/IAV9" element={<Trial9/>}/>
				<Route path="/IAV10" element={<Trial10/>}/>

				<Route path="/storage" element={<StorageTestPage/> }/>

			</Routes>
		</div>
	);
};

export default App; 