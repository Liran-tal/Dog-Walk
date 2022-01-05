import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPage from "../edit/EditPage";
import { UserContext } from "../../components/UserContext/UserContext";
import "./Login.style.css";


export default function Login(props) {
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [newUser, setNewUser] = useState(false);
	const {user, setUser} = useContext(UserContext);
	const [isShowForm, setIsShowForm] = useState(false);
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
		<div className="Login-wrapper Login-flex-col">
			<div className="Login-login-wrapper Login-flex-col">
				<h2>
					נרשמת?
				</h2>
				<label className="Login-login-label">
					<span className="Login-login-title">
						שם:
					</span>
					<input 
						className="Login-login-input"
						type="text" 
						onChange={loginInputHandler}
						defaultValue={userName}
						placeholder="(כל שם אפשרי)"
						name="userName"
					/>
				</label>
				<label className="Login-login-label" >
					<span className="Login-login-title">
						סיסמא:
					</span>
					<input 
						className="Login-login-input"
						type="text" 
						onChange={loginInputHandler}
						defaultValue={userPassword}
						placeholder="(מספר ID של MockAPI)"
						name="userPassword"
					/>
				</label>
				<div className="Login-btn-wrapper">
					<button
						className="Login-login-btn"
						onClick={loginSubmitHandler}
						value="loginSubmit"
					>
						התחברות
					</button>
				</div>
			</div>
			<div className="Login-new-user-wrapper Login-flex-col">
				<h2>
					{!newUser ? "לא נרשמת?" : "הרשמה"}
				</h2>
				{
					!newUser &&
					<div className="Login-btn-wrapper">
						<button
							className="Login-new-user-btn"
							onClick={() => setNewUser(true)}
						>
							פתיחת פרופיל חדש
						</button>
					</div>
				}
				{
					newUser && 
						<EditPage 
							setIsShowForm={setNewUser}
							isEdit={false} 
							callback={props.callback} 
						/>
				}
			</div>
		</div>
	)
}