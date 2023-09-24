import axios from "axios";

const api = axios.create({
  baseURL: "https://strapi-philips.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async (url) => {
  try {
    const response = await api.get(url);
    return await response;
  } catch (error) {
    return console.log(error);
  }
};

export const postRequest = async (url, data) => {
  try {
    console.log("In try");
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    console.log("In catch");

    return error;
  }
};
