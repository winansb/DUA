import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage";

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<MainPage />} />
			</Routes>
		</div>
	);
};

export default App;