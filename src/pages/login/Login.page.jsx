import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPage from "../edit/editPage";
import Api from "../../API/Mock.api";
import { UserContext } from "../../components/UserContext/UserContext";


export default function Login(props) {
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [newUser, setNewUser] = useState(false);
	const {user, setUser} = useContext(UserContext);
	let navigate = useNavigate();

	function loginInputHandler({target}){
		target.name === "userName" && setUserName(target.value);
		target.name === "userPassword" && setUserPassword(target.value);
	}

	function loginSubmitHandler(){
		const userData = props.data.find((walker) => {
			return walker.id === userPassword;
		})

		setUser(userData);
		navigate("/")
	}

	return (
		<div>
			<div>
				<h2>
					משתמש רשום?
				</h2>
				<label >
					שם משתמש
					<input 
						type="text" 
						onChange={loginInputHandler}
						defaultValue={userName}
						placeholder="הכנס שם משתמש"
						name="userName"
					/>
				</label>
				<label >
					סיסמא
					<input 
						type="text" 
						onChange={loginInputHandler}
						defaultValue={userPassword}
						placeholder="הכנס סיסמא"
						name="userPassword"
					/>
				</label>
				<div>
					<button
						onClick={loginSubmitHandler}
						value="loginSubmit"
					>
						התחבר
					</button>
				</div>
			</div>
			<div>
				<h2>
					לא משתמש?
				</h2>
				<button
					onClick={() => setNewUser(true)}
				>
					הירשם!
				</button>
			</div>
			{newUser && <EditPage isEdit={false} />}
		</div>
	)
}