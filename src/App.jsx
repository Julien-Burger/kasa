import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globalStyle.scss";

import Home from "./pages/home";
import About from "./pages/about";
import Apartment from "./pages/apartment";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/apartment/:id" element={<Apartment />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
