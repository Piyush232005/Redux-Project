import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

export const asyncgetusers = () =>  async (dispatch,getState) =>{
    try {
        console.log("Current state data ",getState());
        const res = await axios.get("/users"); 
        dispatch(loaduser(res.data));  
    } catch (error) {
        console.log(error);
    }
}