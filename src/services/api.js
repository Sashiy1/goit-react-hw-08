import axios from "axios";

export const requestProducts = async () => {
  const { data } = await axios.get(
    "https://6623c0e73e17a3ac84701c46.mockapi.io/contacts"
  );
  

  return data;
};


