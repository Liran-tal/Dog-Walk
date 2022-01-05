import React from "react";
import "../../pages/login/Login.style.css";
import "./ItemEditor.style.css"

export default function itemEditor(props) {
	

	return (
		<div className="ItemEditor-wrapper">
			<form 
				className="form" 
			>
				<label className="Login-login-label">
					<span className="Login-login-title">
						שם:
					</span>
					<div className="field">
						<input 
							className="Login-login-input"
							type="text"
							name="name" 
							defaultValue={props.item.name} 
							placeholder="פה עין"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label className="Login-login-label">
					<span className="Login-login-title">
						מספר כלבים מירבי בטיול?:
					</span>
					<div className="field">
						<input 
							className="Login-login-input"
							type="text" 
							name="dogsNum"
							defaultValue={props.item.dogsNum} 
							placeholder="3"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label className="Login-login-label">
					<span className="Login-login-title">
						גיל:
					</span>
					<div className="field">
						<input 
							className="Login-login-input"
							type="text" 
							name="age"
							defaultValue={props.item.age} 
							placeholder="23"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label className="Login-login-label">
					<span className="Login-login-title">
						אזור פעילות:
					</span>
					<div className="field">
						<input 
							className="Login-login-input"
							type="text" 
							name="location"
							defaultValue={props.item.location} 
							placeholder="תל-אביב"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label className="Login-login-label">
					<span className="Login-login-title">
						טלפון:
					</span>
					<div className="field">
						<input
							className="Login-login-input" 
							type="text" 
							name="phone"
							defaultValue={props.item.phone} 
							placeholder="05x-xxx-xx-xx"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label className="Login-login-label">
					<span className="Login-login-title">
						תמונת פרופיל
					</span>
					<div className="field">
						<input 
							className="Login-login-input"
							type="text" 
							name="avatar"
							defaultValue={props.item.avatar} 
							placeholder="jpug.כלבים שמחים בטיול"
							onChange={props.onChange}
						/>
					</div>
				</label>
			</form>
			<div className="ItemEditor-btns-wrapper">
				<button 
					className="Login-login-btn" 
					onClick={props.onSubmit}
					value={props.isEdit ? "edit" : "add"}
					>
					שליחה
				</button>
				<button 
					className="Login-login-btn" 
					onClick={props.onCancel}
					value={props.isEdit ? "edit" : "add"}
					>
					ביטול
				</button>
			</div>
			{
				props.isEdit &&
				<div>
					<button
						className="Login-login-btn ItemEditor-delete-btn" 
						onClick={props.onDelete}
						>
						מחיקת החשבון
					</button>
				</div>
			}
		</div>
	)
}
