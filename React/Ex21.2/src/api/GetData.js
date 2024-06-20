// GetData.js
import axios from "axios";

export const Data = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
