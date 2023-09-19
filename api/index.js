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
