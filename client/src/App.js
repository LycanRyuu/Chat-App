import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Chats from "./components/ChatMenu";
import { SocketProvider } from "./components/SocketProvider";

function App() {
	const id = "lycan";

	return (
		<SocketProvider id={id}>
			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<Chats />} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</Router>
			</div>
		</SocketProvider>
	);
}

export default App;
