import React from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom" 
// pages
import HomePage from "./pages/HomePage"
// utils

// store authentication data globally
export const AuthContext = React.createContext()

function App() {
	return (

		<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					{/* <Route component={NotFoundPage} /> */}
					{/* <Redirect to='/login' component={LoginPage}  /> */}
				</Switch>
			</BrowserRouter>

	) 
	
}

export default App
