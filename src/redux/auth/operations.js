import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearToken,
  requestCurrentUser,
  requestLogIn,
  requestLogOut,
  requestSignUp,
  setToken,
} from "../../services/contacts.api";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log("data: ", data.user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestLogIn(formData);
      console.log("data: ", data.user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.authorizationDetails.token;
    setToken(token);

    try {
      const data = await requestCurrentUser();
      console.log("data: ", data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
       await requestLogOut();
      
       clearToken()
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);