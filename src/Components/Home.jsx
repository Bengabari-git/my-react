import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
// import {Button, CircularProgress,AppBar} from '@mui/material'
import { useEffect, useState, Suspense, lazy } from "react";
import About from "./About";

// import { Button } from "bootstrap";

function HomeContent() {
	let title = document.getElementById("title");
	title.textContent = "Beng AI | Home";
	return (
		<div className="homecontent">
			<div className="head">
				<h1 data-content="Welcome"></h1>
				<div className="offers">
					<div className="cards">
						<div className="c1">
							<div>AI powering Tech</div>
							<div className="bgs b1"></div>
						</div>
						<div className="c1">
							<div>AI in the Data World </div>
							<div className="bgs b2"></div>
						</div>
						<div className="c1">
							<div>Super Intelligence with AI</div>
							<div className="bgs b3"></div>
						</div>
					</div>
				</div>

                <section className="description">
					<div className="des">
						<div>Develop and do more with AI</div>
						<div className="aiNames">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						
					</div>
				</section>
				<div className="getStarted">
					<NavLink to="/about">
						<button type="button">Know more</button>
					</NavLink>
					
				</div>
			</div>
		</div>
	);
}
export default HomeContent;
