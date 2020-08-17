import get from "../utils/get";

export default async (url) => {
  try {
    return await get({ url });
  } catch (e) {
    console.error(e);
  }
};
