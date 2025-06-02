import { Routes, Route } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recovery from "./pages/Recovery";

function WebRoutes() {
	return(
		<Routes>
			<Route path="/" element={<Login/>}/>
			<Route path="/chat" element={<Chat/>}/>

			<Route path="/login" element={<Login/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/recovery" element={<Recovery/>}/>
			
			<Route path="/entrar" element={<Login/>}/>
			<Route path="/cadastro" element={<Signup/>}/>
			<Route path="/recuperacao" element={<Recovery/>}/>
		</Routes>
	)
}

export default WebRoutes;