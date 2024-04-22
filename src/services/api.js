import axios from "axios";

export const requestContacts = async () => {
  const { data } = await axios.get(
    "https://6623c0e73e17a3ac84701c46.mockapi.io/contacts"
  );
  

  return data;
};

export const addContact = async (info) => {
  console.log(info)
  const { data } = await axios.post(
    "https://6623c0e73e17a3ac84701c46.mockapi.io/contacts", info
  );
  

  return data;
};

export const deleteContact = async (id) => {
  console.log(id)
  const { data } = await axios.delete(
    `https://6623c0e73e17a3ac84701c46.mockapi.io/contacts/${id}`
  );
  

  return data;
};