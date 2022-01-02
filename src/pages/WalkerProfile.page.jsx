import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { PawRanks } from "../utils/PawRanks";

export default function DogWalker(props) {

	function displayProfile() {
		const { id } = useParams();
		const walker = props.data.find((walker) => {
			return walker.id === id;
		})

		return (

		)
	}

	return (
			displayProfile()		
	)
}