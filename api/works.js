import { getRequest } from ".";

export const getAllWorks = () =>
  getRequest(
    "https://strapi-philips.onrender.com/api/stammwerkes?populate=deep"
  );
