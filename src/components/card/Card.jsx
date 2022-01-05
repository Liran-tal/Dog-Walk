import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import LocalStorageAPI from "../../API/LocalStorageApi";
import { useEffect } from "react/cjs/react.development";



export default function Card(props) {
	
	const [isFavorite, setIsFavorite] = useState(false);
	const [walker, setwalker] = useState(props.walker);
	let navigate = useNavigate();
	
	useEffect(() => {
		if (LocalStorageAPI.findItem(props.walker.id)) {
			setIsFavorite(true);
		}
	}, [])

	function toggleFavorite() {
		if (isFavorite) {
			LocalStorageAPI.deleteItemsArray(walker.id);
			setIsFavorite(false);
			return;
		}

		LocalStorageAPI.setItemsArray(walker);
		setIsFavorite(true);
	}

	async function changeRank(command) {
		walker.rank = command === "increase" 
			? walker.rank + 1
			: walker.rank - 1;

		try {
			if (await Api.editItem(walker.id, walker)) {
				props.userDidChanged();
				setwalker (walker);
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="ui centered card" >
			<Link to={"/walker/" + walker.id} className="Card-link">
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
						מספר כלבים בטיול: {walker.dogsNum}
					</div>
					{
						props.isProfile && 
						<div className="description">
							גיל: {walker.age}
						</div>
					}
					<div className="description">
						<span className="Card-descrition-title">דירוג: </span>
						<span className="Card-descrition-text">{PawRanks[walker.rank % 4]}</span> 
					</div>
					{ 
						props.isProfile &&
						<div className="description" >
							<div className="Card-contact-wrapper">
								צור קשר: <AiOutlineWhatsApp /> <RiMessengerLine /> <AiOutlinePhone />
							</div>
							<div className="Card-likes-btns-wrapper">
								<button 
									className="Card-likes-btn" 
									onClick={() => changeRank("increase")} 
									>
									<AiOutlineLike />
								</button>
								<button 
									onClick={() => changeRank("decrease")} 
									className="Card-likes-btn"
									>
									<AiOutlineDislike />
								</button>
							</div>
						</div>
					}
				</div>
				{
					props.isProfile &&
					<div className="Card-favorites-btn-wrapper">
						<button
							className="Card-favorites-btn" 
							onClick={toggleFavorite}
							>
							{isFavorite ? <AiFillStar /> : <AiOutlineStar />}
							הוספה למועדפים
						</button>
					</div>
				}					
			</Link>
			{
				props.isProfile &&
				<button  
					className="Card-back-btn"
					onClick={() => navigate(-1)}>
					חזרה
				</button>
			}
		</div>
	)
}
