import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
// import {Button, CircularProgress,AppBar} from '@mui/material'
import { useEffect, useState, Suspense, lazy } from "react";
import About from "./About";

// import { Button } from "bootstrap";

function HomeContent() {
	return (
		<div className="homecontent">
			<div className="head">
				<h1 data-content="Welcome">Welcome to My website</h1>
				<div className="offers">
					<div className="cards">
						<div className="c1">
							<div>A Student in Information Technology</div>
							<div className="bgs b1"></div>
						</div>
						<div className="c1">
							<div>A developing full-stack developer</div>
							<div className="bgs b2"></div>
						</div>
						<div className="c1">
							<div>AI Enthusiast</div>
							<div className="bgs b3"></div>
						</div>
					</div>
				</div>
                <div className="description">
                    <div>Looking for how to build good, user-friendly, and competitive websites?</div>
                    <div>Then Contact me:</div>
                    <div className="contactButton">
                        <button type="button">Contact Me</button>
                    </div>
                </div>
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
