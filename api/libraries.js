import { getRequest } from ".";

export const getHomepageLibraries = async () => {
  try {
    const res = await getRequest(
      "https://strapi-philips.onrender.com/api/users?populate=deep,4"
    );
    return res;
  } catch (error) {
    return console.log(error);
  }
};

export const getAllLibraries = (page, pageSize) =>
  getRequest(
    `https://strapi-philips.onrender.com/api/users?populate=deep,4&pagination[page]=${page}&pagination[pageSize]=${pageSize}&pagination[withCount]=true`
  );

export const getSingleLibrary = (id) =>
  getRequest(
    `https://strapi-philips.onrender.com/api/users/${id}?populate=deep,4`
  );
