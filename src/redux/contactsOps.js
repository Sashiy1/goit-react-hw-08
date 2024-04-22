
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, requestContacts } from "../services/api";


export const apiGetContacts = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
    try {
        const data = await requestContacts()
        console.log('data: ', data);
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
        
    }
});


export const apiAddContact = createAsyncThunk("contact/add", async (info, thunkAPI) => {
    try {
        const data = await addContact(info)
        console.log('data: ', data);
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
        
    }
});