import { API } from "../config/ApiUrl";
import axios from "axios";

export const getAllWalkInList = async () => {
  try {
    const response = await axios.get(API.GET_ALL_WALK_INS);

    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

export const addWalkIns = async (payload) => {
  try {
    const response = await axios.post(API.CREATE_WALK_IN, payload);

    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

export const deleteWalkIns = async (id) => {
  try {
    const responseData = await axios.delete(`${API.DELETE_WALK_IN}/${id}`);

    return responseData.data;
  } catch (err) {
    console.error("error in delete Walk-Ins", err);
  }
};

export const getWalkIn = async (id) => {
  try {
    const responseData = await axios.get(`${API.GET_WALK_IN}/${id}`);
   
    return responseData.data;
  } catch (err) {
    console.error("error in delete Walk-Ins", err);
  }
};

