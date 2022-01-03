import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../API/Mock.api";
import ItemEditor from "../../components/itemEditor/itemEditor";
import { UserContext } from "../../components/UserContext/UserContext";


export default function EditPage (props) {

	const defaultObject = () => {
		return (
			{
				name: "",
				avatar: "",
				dogsNum: "",
				age: "",
				location: "",
				rank: 0,
				phone: "",
				id: "",
			}
		)
	};
	
	const [walkerObject, setWalkerObject] = useState(defaultObject);
	const [isEdit, setIsEdit] = useState(props.isEdit);
	const {user, setUser} = useContext(UserContext);
	let navigate = useNavigate();

	useEffect (() => {
		if (user && isEdit) {	
			setWalkerObject(user);
		}
	}, []);

	function onChange ({target}) {
		setWalkerObject((walkerObject) => ({
			...walkerObject,
			[target.name]: target.value,
		}))
	};

	async function onSubmit (event) {
		if (event.target.value === "add") {
			try {
				await Api.addItem(walkerObject);
				navigate("/login") ;
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			await Api.editItem(user.id, walkerObject);	
			setUser(walkerObject);
			navigate("/") ;
		} 
		catch (error) {
			console.error(error);	
		}
	};

	return(
		<ItemEditor 
			item={walkerObject}
			onChange={onChange}
			onSubmit={onSubmit}
			isEdit={isEdit}
		/>
	);
}