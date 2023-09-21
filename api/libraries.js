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
