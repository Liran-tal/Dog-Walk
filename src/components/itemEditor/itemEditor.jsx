import React from "react";


export default function itemEditor(props) {
	

	return (
		<div>
			<form 
				className="ui form" 
			>
				<label>
					Model:
					<div className="field">
						<input 
							type="text"
							name="model" 
							defaultValue={props.item.model} 
							placeholder="Item model"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					Items in stock:
					<div className="field">
						<input 
							type="text" 
							name="inStock"
							defaultValue={props.item.inStock} 
							placeholder="Items in stock"
							onChange={props.onChange}
						/>
					</div>
				</label>
				<label>
					Image
					<div className="field">
						<input 
							type="text" 
							name="avatar"
							defaultValue={props.item.avatar} 
							placeholder="https://this-image-url.com"
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
				Submit
			</button>
		</div>
	)
}
