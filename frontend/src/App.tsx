import "./App.css";
import Main from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<div className="app">
				<Navbar />
				<Main />
			</div>
		</>
	);
}

export default App;
