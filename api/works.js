import { getRequest } from ".";

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
