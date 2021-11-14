import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom" 
// pages
import HomePage from "./pages/HomePage"
// utils
import { RemoveBtnFocusOutline } from "./utils/removeBtnFocusOutline"

function App() {

	RemoveBtnFocusOutline() // css function

	return (
		<BrowserRouter>
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
		</BrowserRouter>
	) 
	
}

export default App
