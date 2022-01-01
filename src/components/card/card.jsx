import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { FaPaw } from "react-icons/fa"

const ranks = [
	<div><FaPaw /></div>, 
	<div><FaPaw /><FaPaw /></div>, 
	<div><FaPaw /><FaPaw /><FaPaw /></div>, 
	<div><FaPaw /><FaPaw /><FaPaw /><FaPaw /></div>, 
]

export default function Card({user}) {
	return (
		<div className="ui card">
			<div className="image">
				<img src={user.avatar} alt={user.name}/>
			</div>
			<div className="content">
				<div className="header">
					שם: {user.model}
				</div>
				<div className="header">
					עיר: {user.location}
				</div>
				<div className="description">
					מספר כלבים מקסימלי בטיול: {user.dogsNum}
				</div>
			</div>
			<div>
				<Link 
					to={"/edit/"} 
					className={"ui button"}
					onClick={onItemEdit}
					value="edit"
					id={user.id}
				>
					Edit
				</Link>
				<Button
					text="הוסף למועדפים"
					value="favorites"
					id={user.id}
					style={{}}
					onClick={onAddFavorite}
				/>
			</div>
		</div>
	)
}
