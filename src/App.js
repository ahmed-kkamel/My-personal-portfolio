import "./App.css";
import Banner from "./compnents/Banner";
import { NavBar } from "./compnents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./compnents/Skills";
import { Projects } from "./compnents/Projects";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
		</div>
	);
}

export default App;
