import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { initializeAnalytics } from "./analytics";
import useAnalytics from "./hooks/useAnalytics";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SideBar from "./components/sidebar/SideBar";


function App() {
	useEffect(() => {
		initializeAnalytics();
	}, []);

	useAnalytics();
	// trackEvent('button', 'click', 'Subscribe Button');

	return (
		<div className="app">
			<div className="overlay">
				<SideBar />
			</div>
			<NavBar />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
