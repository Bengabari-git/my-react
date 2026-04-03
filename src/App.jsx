import { Navbar } from "./Components/cp2";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Components/Contact"
import Loader from "./Components/Loader";
import Layout from "./Components/Layout";
import "./App.css";
import { lazy, Suspense } from "react";

const Ho = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/Home")), 5000),
		),
);
const Ab = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/About")), 5000),
		),
);
const Con = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/Contact")), 5000),
		),
);

function MyApp() {
	return (
		<div>
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Layout>
						<Navbar></Navbar>
						<Routes>
							<Route path="/home/" element={<Ho />} />
							<Route path="/" element={<Ho />} />
							<Route path="/about/" element={<Ab />} />
							<Route path="/contact/" element={<Con />}></Route>
							<Route path="/load/" element={<Loader />}></Route>
							<Route path="/nav" element={<Navbar />}></Route>
						</Routes>
					</Layout>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}
export default MyApp;

