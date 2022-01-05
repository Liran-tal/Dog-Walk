

export default class LocalStorageAPI {

	
	static setItemsArray = (item) => {
		const itemsArray = JSON.parse(localStorage.getItem("itemsArray") || "[]");
		if (item) {
			itemsArray.push(item);
		}
		localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
	}
	
	static getItemsArray = () => {
		const itemsArray = JSON.parse(localStorage.getItem("itemsArray") || "[]");
		return itemsArray;
	}

	static findItem = (itemId) => {
		return( 
			JSON.parse((localStorage.getItem("itemsArray")) || "[]").find((item) => {
					return itemId === item.id;
				})
		)
	}

	static deleteItemsArray = (itemId) => {
		const itemsArray = JSON.parse(localStorage.getItem("itemsArray"));
		itemsArray.splice(
			itemsArray.findIndex((item) => {
				return itemId === item.id;
			})
		, 1);

		localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
	}
}