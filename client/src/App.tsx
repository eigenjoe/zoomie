import React from "react";

import "./App.css";
import { UL } from "./components/UL";

const names = ["Joe", "Nina", "Mami", "Papi"];

function App() {
	return (
		<div className="App">
			Hello from React App
			<h1>Hi I'm learning real-time application development.</h1>
			<UL>{names}</UL>
			<h1>I love React with TypeScript</h1>
		</div>
	);
}

export default App;
