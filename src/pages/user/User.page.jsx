import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPage from "../edit/editPage";
import { UserContext } from "../../components/UserContext/UserContext";

export default function User(props) {
	const {user, setUser} = useContext(UserContext);
	const [isEdit, setIsEdit] = useState(false);
	let navigate = useNavigate();

	if (!user) {
		navigate("/");
	}

	async function logOut() {
		await setUser(null);
	}

	function editUser() {
		setIsEdit(true);
	}

	return (
		<div>
			<h3>
				{user && user.name}
			</h3>
			<button
				onClick={() => setIsEdit(true)}
			>
				עריכת פרופיל
			</button>
			{
				isEdit &&
					<EditPage 
						isEdit={isEdit} 
						callback={props.callback}
					/>
			}
			{
				!isEdit &&
					<button
						onClick={logOut}
					>
						התנתקות
					</button>
			}	
		</div>
	)
}


