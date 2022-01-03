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

	function onChangeHandler ({target}) {
		setWalkerObject((walkerObject) => ({
			...walkerObject,
			[target.name]: target.value,
		}))
	};

	async function onSubmitHandler (event) {
		if (event.target.value === "add") {
			try {
				await Api.addItem(walkerObject);
				props.callback();
				navigate("/login") ;
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			await Api.editItem(user.id, walkerObject);	
			props.callback();
			setUser(walkerObject);
			navigate("/") ;
		} 
		catch (error) {
			console.error(error);	
		}
	};
	
	async function onDeleteHandler () {
		try {
			await Api.deleteItem(walkerObject.id);
			props.callback();
			navigate("/") ;
		} 
		catch (error) {
			console.error(error);
		}
	}

	return(
		<ItemEditor 
			item={walkerObject}
			onChange={onChangeHandler}
			onSubmit={onSubmitHandler}
			onDelete={onDeleteHandler}
			isEdit={isEdit}
		/>
	);
}
