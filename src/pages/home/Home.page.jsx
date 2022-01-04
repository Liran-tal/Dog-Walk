import React, {useState, useEffect } from "react";
import Card from "../../components/card/card";
import Loader from "../../components/Loader/loader";

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
					callback={props.callback}
				/>
			)
		})
	}

	return (
		displayRandomUsers()
	)
}

