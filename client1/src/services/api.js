import axios from "axios";

export const uploadfile = async (data) => {
  // const API_URL = "http://localhost:4000";
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/upload`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};
