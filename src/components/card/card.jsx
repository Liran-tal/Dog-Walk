import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { PawRanks } from "../../utils/PawRanks";
import Api from "../../API/Mock.api";
import "./Card.style.css";



export default function Card(props) {

	const [isFavorite, setIsFavorite] = useState(false);
	const [walker, setwalker] = useState(props.walker);
	const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites") || "[]"));


	function toggleFavorite() {
		if (isFavorite) {
			localStorage.removeItem(walker.id);
			setIsFavorite(false);
			return;
		}

		localStorage.setItem(walker.id, walker);
		setIsFavorite(true);
	}

	async function changeRank(command) {
		walker.rank = command === "increase" 
			? walker.rank + 1
			: walker.rank - 1;

		try {
			if (await Api.editItem(walker.id, walker)) {
				props.callback();
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
					<div className={"description"}>
						 דירוג: {PawRanks[walker.rank % 4]}
					</div>
				</div>
				
				{ 
					props.isProfile &&
					<div>
						<div>
							צור קשר: <AiOutlineWhatsApp /> <RiMessengerLine /> <AiOutlinePhone />
						</div>
						<button onClick={() => changeRank("increase")} >
							<AiOutlineLike />
						</button>
						<button onClick={() => changeRank("decrease")} >
							<AiOutlineDislike />
						</button>
					</div>
				}
			</Link>
			<div className="Card-favorites-btn-wrapper">
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
