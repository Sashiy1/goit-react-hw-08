import { createSlice } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";



const INITIAL_STATE = {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
    filters: {
      name: "",
    },
  };
  
  const contactsSlice = createSlice({
    // Ім'я слайсу
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState: INITIAL_STATE,
  
    extraReducers: (builder) =>
      builder
        .addCase(apiGetContacts.pending, (state) => {
          state.contacts.loading = true;
          state.contacts.error = false;
        })
        .addCase(apiGetContacts.fulfilled, (state, action) => {
          state.contacts.loading = false;
          state.contacts.items = action.payload;
        })
        .addCase(apiGetContacts.rejected, (state) => {
          state.contacts.loading = false;
          state.contacts.error = true;
        })
        .addCase(apiAddContact.pending, (state) => {
          state.contacts.loading = true;
          state.contacts.error = false;
        })
        .addCase(apiAddContact.fulfilled, (state, action) => {
          state.contacts.loading = false;
          state.contacts.items.push(action.payload);
        })
        .addCase(apiAddContact.rejected, (state) => {
          state.contacts.loading = false;
          state.contacts.error = true;
        })
        .addCase(apiDeleteContact.pending, (state) => {
          state.contacts.loading = true;
          state.contacts.error = false;
        })
        .addCase(apiDeleteContact.fulfilled, (state, action) => {
          state.contacts.loading = false;
          state.contacts.items = state.contacts.items.filter(
            (item) => item.id !== action.payload.id
          );
        })
        .addCase(apiDeleteContact.rejected, (state) => {
          state.contacts.loading = false;
          state.contacts.error = true;
        }),
  });
  
  // // Генератори екшенів
  // export const { addContact, deleteContact } = contactsSlice.actions;
  
  
  
  // Редюсер слайсу
  export const contactsReducer = contactsSlice.reducer;
  