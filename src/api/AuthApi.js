import { API } from "../config/ApiUrl";
import axios from "axios";

export const Login = async (payload) => {
    try {
      const response = await axios.post(API.LOGIN, payload);
      console.log("response",response);
  
      return response.data || [];
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };