import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../button/button";
// import { FaPaw } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { PawRanks } from "../../utils/PawRanks";
import Api from "../../API/Mock.api";


export default function Card(props) {
// const ranks = [
// 	<span><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /><FaPaw /></span>, 
// 	<span><FaPaw /><FaPaw /><FaPaw /><FaPaw /></span>, 
// ]
	const [isFavorite, setIsFavorite] = useState(false);
	const [walker, setwalker] = useState(props.walker);

	function toggleFavorite() {
		if (isFavorite) {
			localStorage.removeItem(walker.id);
			setIsFavorite(false);
			return;
		}

		localStorage.setItem(walker.id, walker);
		setIsFavorite(true);
	}

	async function changeRank({target}) {
		walker.rank = target.name === increase 
			? walker.rank + 1
			: walker.rank - 1;

		try {
			if (await Api.editItem(walker.id, walker)) {
				setwalker (walker);
			}
		} catch (error) {
			console.error(error);
		}
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
					{
						props.isProfile && 
						<div className="description">
							גיל: {walker.age}
						</div>
					}
					<div className="description">
						 דירוג: {PawRanks[walker.rank]}
					</div>
				</div>
				{ 
					props.isProfile &&
					<div>
						<div>
							צור קשר: <AiOutlineWhatsApp /> <RiMessengerLine /> <AiOutlinePhone />
						</div>
						<button onClick={changeRank} name="increase" >
							
						</button>
						<button onClick={changeRank} name="decrease" >

						</button>
					</div>
				}
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
