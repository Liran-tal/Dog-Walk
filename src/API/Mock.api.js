import { useContext } from "react";
import axios from "axios";


const Api = axios.create({ baseURL: , })


export default class Api {

  static getData = async (id) => {
    return await axoisApi.get(id); 
  } 

  static addItem = async (item) => {
    return await axoisApi.post("",item);
  }
  
  static editItem = async (itemId, newItem) => {
    return await axoisApi.put(itemId, newItem);
  }
  
  static deleteItem = async (itemId) => {
    return await axoisApi.delete(itemId);
  }
  
  
}