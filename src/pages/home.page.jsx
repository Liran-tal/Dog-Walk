import React, {useState, useEffect, useContext} from "react";
import Api from "../API/Mock.api";
import Card from "../components/card/card";

export default function Home(props) {

	const [isLoader, setLoader]	= useState(true);

	useEffect(() => {
		if (props.data) {
			setLoader(false);
		}
	}, []);

	const displayRandomUsers = () => {
		// const res = [];
		// for (let i = 0; i < 4; ++i) {
		// 	let random = Math.floor(Math.random() * props.data.length);
		// 	res.push(<Card key={props.data[random].id} user={props.data[random]} />);
		// }
		// return res;
		return props.data.map((walker) => {
			return (
				<Card key={walker.id} walker={walker} />
			)
		})
	}

	return (
		displayRandomUsers()
	)
}


// {
// 	"name": "לירן",
// 	"age": 
// 	"avatar": "$image.avatar",
// 	"dogsNum": "(Math.floor(Math.random() * 10) + 1)",
// 	"rank": "(Math.floor(Math.random() * 4) + 1)",
// 	"city": "$address.cityName",
// 	"freeText": "$lorem.paragraph",
// 	"contact": {
// 		"phone": "$phone.phoneNumber",
// 	},
// }