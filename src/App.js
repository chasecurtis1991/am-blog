import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Navbar";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div id="page-body">
					<Routes>
						<Route path="/" element={<BlogPage />} />
						<Route path="/post/:id" element={<PostPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

				


export default App;
