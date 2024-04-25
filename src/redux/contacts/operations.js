import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const apiGetContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("https://66158541b8b8e32ffc7b2aa3.mockapi.io/contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contact/add",
  async (info, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://6623c0e73e17a3ac84701c46.mockapi.io/contacts", info
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const apiDeleteContact = createAsyncThunk(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://6623c0e73e17a3ac84701c46.mockapi.io/contacts/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
