import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { BiSearchAlt2 } from "react-icons/bi"
import { UserContext } from "../UserContext/UserContext";
import "./NavBar.style.css"

export default function NavBar() {

	const {user} = useContext(UserContext);

	return (
		<div className="Navbar Navbar-flex-row" >
			<Link to="/" >
				<div className="Navbar-flex-row" >
					<AiTwotoneHome className="Navbar-link-icon" />
					<div className="Navbar-link-text" >
						בית
					</div>
				</div>
			</Link>
			<Link to={user ? "/user" : "/login"} >
				<div className="Navbar-flex-row" >
					<FiUser className="Navbar-link-icon" />
					<div className="Navbar-link-text" >
						{user ? <span>{user.name}</span> : <span>התחברות</span>}
					</div>
				</div>
			</Link>
			<Link to="/favorites" >
				<div className="Navbar-flex-row" >
					<AiFillStar className="Navbar-link-icon" />
					<div className="Navbar-link-text" >
						מועדפים
					</div>
				</div>
			</Link>
			<Link to="/search" >
				<div className="Navbar-flex-row" >
					<BiSearchAlt2 className="Navbar-link-icon" />
					<div className="Navbar-link-text" >
						חיפוש
					</div>
				</div>
			</Link>
		</div>
	)
}