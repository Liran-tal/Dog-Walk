import React from "react";


export default function itemEditor(props) {
	

	return (
		<div>
			<form 
				className="ui form" 
			>
				<label>
					שם:
					<div className="field">
						<input 
							type="text"
							name="name" 
							defaultValue={props.item.name} 
							placeholder="מעיין ישראלי"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					מספר כלבים מירבי בטיול?:
					<div className="field">
						<input 
							type="text" 
							name="dogsNum"
							defaultValue={props.item.dogsNum} 
							placeholder="3"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					גיל:
					<div className="field">
						<input 
							type="text" 
							name="age"
							defaultValue={props.item.age} 
							placeholder="23"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					אזור פעילות:
					<div className="field">
						<input 
							type="text" 
							name="location"
							defaultValue={props.item.location} 
							placeholder="תל-אביב"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					טלפון:
					<div className="field">
						<input 
							type="text" 
							name="phone"
							defaultValue={props.item.phone} 
							placeholder="05x-xxx-xx-xx"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					תמונת פרופיל
					<div className="field">
						<input 
							type="text" 
							name="avatar"
							defaultValue={props.item.avatar} 
							placeholder="כלבים שמחים בטיול"
							onChange={props.onChange}
						/>
					</div>
				</label>
			</form>
			
			<button 
				className="ui button" 
				onClick={props.getChangedItemId}
				onClick={props.onSubmit}
				value={props.isEdit ? "edit" : "add"}
			>
				שליחה
			</button>
		</div>
	)
}
