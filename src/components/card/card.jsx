import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../button/button";
// import { FaPaw } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { PawRanks } from "../../utils/PawRanks";


export default function Card({ walker }) {
// const ranks = [
// 	<span><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /><FaPaw /><FaPaw /></span>, 
// ]
	const [isFavorite, setIsFavorite] = useState(false);

	function toggleFavorite() {
		if (isFavorite) {
			localStorage.removeItem(walker.id);
			setIsFavorite(false);
			return;
		}

		localStorage.setItem(walker.id, walker);
		setIsFavorite(true);
	}

	return (
		<div className="ui card">
			<Link to={"/walker/" + walker.id} >
				<div className="image">
					<img src={walker.avatar} alt={walker.name}/>
				</div>
				<div className="content">
					<div className="header">
						שם: {walker.name}
					</div>
					<div className="description">
						עיר: {walker.location}
					</div>
					<div className="description">
						מספר כלבים מקסימלי בטיול: {walker.dogsNum}
					</div>
					<div className="description">
						 דירוג: {PawRanks[walker.rank]}
					</div>
				</div>
			</Link>
			<div>
				{/* <Button
					text={(isFavorite ? <AiFillStar /> : <AiOutlineStar />) + "הוסף למועדפים"}
					value="favorites"
					id={walker.id}
					style={{}}
					onClick={toggleFavorite}
				/> */}
				<button 
					onClick={toggleFavorite}
				>
					{isFavorite ? <AiFillStar /> : <AiOutlineStar />}
					הוסף למועדפים
				</button>
			</div>
		</div>
	)
}
