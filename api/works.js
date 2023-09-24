import { getRequest, postRequest } from ".";

export const loginApi = (payload) =>
  postRequest("https://strapi-philips.onrender.com/api/auth/local", payload);

export const getAllWorks = () =>
  getRequest(
    "https://strapi-philips.onrender.com/api/besondere-werke?populate=deep,3"
  );

export const getPaginatedWorks = (page, pageSize) =>
  getRequest(
    `https://strapi-philips.onrender.com/api/stammwerkes?populate=deep,3&pagination[page]=${page}&pagination[pageSize]=${pageSize}&pagination[withCount]=true`
  );

export const getSpecialWorks = () =>
  getRequest(
    "https://strapi-philips.onrender.com/api/besondere-werke?populate=deep,3"
  );

export const getSingleWork = (id) =>
  getRequest(
    `https://strapi-philips.onrender.com/api/stammwerkes/${id}?populate=deep,3`
  );
