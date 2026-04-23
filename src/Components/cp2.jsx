import { useEffect, useState} from "react";
import { BrowserRouter, NavLink} from "react-router-dom";
// import'../@mui/material'

// import { CircularProgress } from "../@mui/material";

function Navbar() {
	const [titleText,setTitle] = useState("");

	let navStyle = ({ isActive }) => ({
		color: isActive ? "var(--blue-color)" : "var(--white-bg)",
		backgroundColor: isActive ? "var(--white-bg)" : "var(--blue-color)",
		borderBottom:
			isActive ? "5px solid var(--blue-color)" : "var(--white-bg)",
		borderRadius: isActive ? "0px" : "16px",
	});
	return (
		<>
		
			<div className="body">
				<nav className="navbar">
					<div className="logoname">BengAI</div>
					<ul>
						
						<li>
							<NavLink
								style={navStyle}
								className="so n"
								to="/home"
								>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								style={navStyle}
								className="so n"
								to="/about"
								>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								style={navStyle}
								className="so n"
								to="/contact"
								>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			
		</>
		
	);
}



export { Navbar};
