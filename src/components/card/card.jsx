import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";

export default function Card({data, onItemDelete, onItemEdit}) {
	return (
		<div className="ui card">
			<div className="image">
				<img src={data.avatar} alt={data.model}/>
			</div>
			<div className="content">
				<div className="header">
					Model: {data.model}
				</div>
				<div className="description">
					In Stock: {data.inStock}
				</div>
			</div>
			<div>
				<Link 
					to={"/edit/"} 
					className={"ui button"}
					onClick={onItemEdit}
					value="edit"
					id={data.id}
				>
					Edit
				</Link>
				<Button
					text="Delete"
					value="delete"
					id={data.id}
					style={{}}
					onClick={onItemDelete}
				/>
			</div>
		</div>
	)
}
