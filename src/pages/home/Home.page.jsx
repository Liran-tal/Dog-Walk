import React, {useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Loader from "../../components/Loader/Loader";

export default function Home(props) {

	const [isLoader, setLoader]	= useState(true);

	useEffect(() => {
		if (props.data) {
			setLoader(false);
		}
	}, []);

	const displayRandomUsers = () => {

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
			style={{padding: "3%"}}
		>
			<div
				className={`ui  cards`}
				>
				{displayRandomUsers()}
			</div>
		</div>
	)
}

