import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  requestAddContact,
  requestDeleteContact,
  requestUserContacts,
} from "../../services/contacts.api";

export const apiGetContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestUserContacts();
    

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contact/add",
  async (info, thunkAPI) => {
    try {
      const data = requestAddContact(info);


      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const apiDeleteContact = createAsyncThunk(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      const data = requestDeleteContact(id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
