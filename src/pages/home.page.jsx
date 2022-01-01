import React, {useState, useEffect, useContext} from "react";
import Api from "../API/Mock.api";


export default function Home(props) {

	const [isLoader, setLoader]	= useState(true);

	useEffect(() => {
		if (data) {
			setLoader(false);
		}
	}, []);

	const displayRandomUsers = () => {
		for (let i = 0; i < 3; ++i) {
			let random = Math.floor(Math.random() * .length);

		}
	}

	return (
		displayRandomUsers()
	)
}


{
	name: "לירן",
	avatar: "$image.avatar",
	dogsNum: (Math.floor(Math.random() * 10) + 1),
	rank: (Math.floor(Math.random() * 4) + 1),
	city: "$address.cityName",
	frreeText: "$lorem.paragraph",
	contact: {
		phone: "$phone.phoneNumber",
	},
}