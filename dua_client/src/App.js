import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./views/screens/HomePage";
import TrialSetup from "./views/screens/TrialSetupContainer";
import ExportPage from "./views/screens/ExportToCSV";
import DeviceGUIPage from "./views/screens/ButtonBoxGUI";
import TrialRun from "./views/screens/TrialRun";
import TrialVideo from "./views/screens/TrialVideoContainer";
import ThankYou from "./views/screens/ThankYou";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/trial-setup" element={<TrialSetup />} />
        <Route path="/export-csv" element={<ExportPage />} />
        <Route path="/device-gui" element={<DeviceGUIPage />} />
        <Route path="/trial-run" element={<TrialRun />} />
        <Route path="trial-video" element={<TrialVideo />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;
