import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPage from "../edit/EditPage";
import { UserContext } from "../../components/UserContext/UserContext";
import "../login/Login.style.css"

export default function User(props) {
	const {user, setUser} = useContext(UserContext);
	const [isShowForm, setIsShowForm] = useState(false);
	let navigate = useNavigate();

	if (!user) {
		navigate("/");
	}

	async function logOut() {
		await setUser(null);
	}

	function editUser() {
		setIsShowForm(true);
	}

	return (
		<div className="Login-wrapper Login-flex-col" >
			<div className="Login-login-wrapper">
				<h2>
					{user && user.name}
				</h2>
				<div className="Login-btn-wrapper">
					<button
						className="Login-login-btn"
						onClick={() => setIsShowForm(true)}
					>
						עריכת פרופיל
					</button>
					{
						!isShowForm &&
						<button
							className="Login-login-btn"
							onClick={logOut}
						>
								התנתקות
							</button>
					}	
				</div>
				{
					isShowForm &&
						<EditPage 
							setIsShowForm={setIsShowForm}
							isEdit={true} 
							callback={props.callback}
						/>
				}
			</div>
		</div>
	)
}


