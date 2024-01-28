import "./App.css";
import Banner from "./compnents/Banner";
import { NavBar } from "./compnents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./compnents/Skills";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
		</div>
	);
}

export default App;
