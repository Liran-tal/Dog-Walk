import React from "react";
import { Link } from "react-router-dom";


export default function Login(props) {

	function logInHandler({target}){

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
						onChange={logInHandler}
						name="userName"
						placeholder="הכנס שם משתמש"
					/>
				</label>
				<label >
					סיסמא
					<input 
						type="text" 
						onChange={logInHandler}
						name="userPassword"
						placeholder="הכנס סיסמא"
					/>
				</label>
			</div>
			<div>
				<h2>
					לא משתמש? הירשם!
				</h2>
				
			</div>
		</div>
	)
}