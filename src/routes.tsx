import { Routes, Route } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function WebRoutes() {
	return(
		<Routes>
			<Route path="/" element={<Login/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/chat" element={<Chat/>}/>
		</Routes>
	)
}

export default WebRoutes;