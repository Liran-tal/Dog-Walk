import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
// import { PawRanks } from "../utils/PawRanks";
import Card from '../../components/card/card';

export default function DogWalker(props) {
	const { id } = useParams();

	if (!props.data){
		return (<div></div>)
	}

	function displayProfile() {
		if (!props.data) {
			return <></>
		}
		const walker = props.data.find((walker) => {
			return walker.id === id;
		})

		return (
			<Card key={walker.id} walker={walker} isProfile={true} />
		)
	}

	return (
			displayProfile()		
	)
}