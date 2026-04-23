import { Navbar} from "./Components/cp2";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
// import Contact from "./Components/Contact"
import Loader from "./Components/Loader";
import Layout from "./Components/Layout";
import "./App.css";
import { lazy, Suspense,useState } from "react";

const Ho = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/Home")), 1400),
		),
);
const Ab = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/About")), 1400),
		),
);
const Con = lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./Components/Contact")), 1400),
		),
);

function MyApp() {
	

	return (
		<div>
			<HashRouter>
				<Suspense fallback={<Loader />}>
					<Layout>
						<Navbar></Navbar>
						
						<Routes>
							<Route path="/home/" element={<Ho />} />
							<Route path="/" element={<Ho />} />
							<Route path="/about/" element={<Ab />} />
							<Route path="/contact/" element={<Con />}></Route>
							
						</Routes>
					</Layout>
				</Suspense>
			</HashRouter>
		</div>
	);
}
export default MyApp;

