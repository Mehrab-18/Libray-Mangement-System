import { getRequest } from ".";

export const getAllShowrooms = async () => {
  try {
    const res = await getRequest(
      "https://strapi-philips.onrender.com/api/users?populate=deep,4&filters[Mitgliedschaft][$in][0]=premium&filters[Mitgliedschaft][$in][1]=silver&filters[Mitgliedschaft][$in][2]=gold"
    );
    return res;
  } catch (error) {
    return console.log(error);
  }
};
