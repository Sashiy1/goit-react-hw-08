import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://6623c0e73e17a3ac84701c46.mockapi.io/"

export const apiGetContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");

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
      const { data }  = await axios.post(
        "contacts", info
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
      const { data } = await axios.delete(
        `/contacts/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
