import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import LocalStorageAPI from '../../API/LocalStorageApi.js';
import Home from "../home/Home.page.jsx";
import "../login/Login.style.css"

export default function Favorites(props) {
	const {user} = useContext(UserContext);
	let favorites;

	if (user) {
		favorites = LocalStorageAPI.getItemsArray();
	}
	else{
		favorites = [];
	}

	return (
		favorites.length < 1 
			? <div className="Login-login-wrapper" >
					<h2>
						אין כלום במועדפים		
					</h2>
					<br />
					<Link 
						to={"/"}
						className="Login-login-btn">
						חזרה אל דף הבית
					</Link>
				</div>
			: <Home data={favorites} userDidChanged={props.userDidChanged} />
	)
}