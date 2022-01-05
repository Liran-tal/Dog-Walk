import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPage from "../edit/EditPage";
import { UserContext } from "../../components/UserContext/UserContext";

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
		<div>
			<h3>
				{user && user.name}
			</h3>
			<button
				onClick={() => setIsShowForm(true)}
			>
				עריכת פרופיל
			</button>
			{
				isShowForm &&
					<EditPage 
						setIsShowForm={setIsShowForm}
						isEdit={true} 
						callback={props.callback}
					/>
			}
			{
				!isShowForm &&
					<button
						onClick={logOut}
					>
						התנתקות
					</button>
			}	
		</div>
	)
}


