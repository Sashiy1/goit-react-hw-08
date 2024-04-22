
import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProducts } from "../services/api";


export const apiGetContacts = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
    try {
        const data = await requestProducts()
        console.log('data: ', data);
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
        
    }
});
