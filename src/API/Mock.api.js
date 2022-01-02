import { useContext } from "react";
import axios from "axios";


const ApiHeader = axios.create({ baseURL: "https://61d00d75cd2ee50017cc97bc.mockapiHeader.io/dogwalk", })


export default class Api {

	static data = [];

  static getData = async (id) => {
		try {
			const {data} = await ApiHeader.get(id); 
			this.data = data
			return this.data;
			
		} catch (error) {
			return error
		}
		// const UsersDataContext = useContext(data);
  } 

  static addItem = async (item) => {
    return await ApiHeader.post("",item);
  }
  
  static editItem = async (itemId, newItem) => {
    return await ApiHeader.put(itemId, newItem);
  }
  
  static deleteItem = async (itemId) => {
    return await ApiHeader.delete(itemId);
  }
  
  
}