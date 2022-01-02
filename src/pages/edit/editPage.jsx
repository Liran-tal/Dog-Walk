import React from "react";
import Api from "../API/Mock.api";
import ItemEditor from "../components/itemEditor/itemEditor";


export default function EditPage (props) {

	defaultState = () => {
		return (
			{
				item: {
					model: "",
					inStock: "",
					avatar: "",
				},
				isEdit: false,
			}
		)
	}
	
	state = this.defaultState();

	componentDidMount = async () => {
		if (!this.props.id) {
			return;
		}
		
		try {
			const {data} = await Api.getData(this.props.id);
			this.setState({item: data, isEdit: true});
		} 
		catch (error) {
			console.error(error);
		}
	}

	onChange = ({target}) => {
		this.setState((prevState) => ({
			...prevState,
			item: {
				...prevState.item,
				[target.name]: target.value,
			}
		}))
	}

	onSubmit = async (event) => {
		event.preventDefault();
		if (event.target.value === "add") {
			try {
				await Api.addItem(this.state.item);	
				this.setState(this.defaultState());
				return ;
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			await Api.editItem(this.props.id, this.state.item);	
			this.setState(this.defaultState());
			return ;
		} 
		catch (error) {
			console.error(error);	
		}
	}

	return(
		<ItemEditor 
			item={this.state.item}
			onChange={this.onChange}
			onSubmit={this.onSubmit}
			getChangedItemId={this.props.getChangedItemId}
			isEdit={this.state.isEdit}
		/>
		// <>Edit Page</>
	)
}