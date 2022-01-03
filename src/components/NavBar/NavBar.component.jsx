import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { UserContext } from "../UserContext/UserContext";


export default function NavBar() {

	const {user, setUser} = useContext(UserContext);

	console.log("user: ", user);

	return (
		<div >
			<Link to="/" >
				<div>
					<AiTwotoneHome />
					<div>
						בית
					</div>
				</div>
			</Link>
			<Link to={user ? "/user" : "/login"} >
				<div >
					<FiUser />
					<div>
						{user ? <span>{user.name}</span> : <span>התחבר</span>}
					</div>
				</div>
			</Link>
			<Link to="/favorites" >
				<div>
					<AiFillStar />
					<div>
						מועדפים
					</div>
				</div>
			</Link>
		</div>
	)
}