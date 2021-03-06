import React from "react";
import Card from "../../components/card/Card";
import Loader from "../../components/Loader/Loader";
import "./Home.style.css"

export default function Home(props) {

	const displayUsers = () => {
		if (!props.data) {
			return <Loader />
		}
		return props.data.map((walker) => {
			return (
				<Card 
					key={walker.id} 
					walker={walker} 
					isProfile={false} 
					userDidChanged={props.userDidChanged}
				/>
			)
		})
	}

	return (
		<div
			className="Home-wrapper"
		>
			<div
				className={`ui cards`}
				>
				{displayUsers()}
			</div>
		</div>
	)
}

