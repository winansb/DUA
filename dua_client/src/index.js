import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mainContainer = document.getElementById('root');
const root = createRoot(mainContainer);

// BrowserRouter forces reactivity for page, only 
// loads loads/reloads things that change, not entire page
/* ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
); */

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);