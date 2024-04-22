import { createSlice } from "@reduxjs/toolkit";
import { apiGetContacts } from "./contactsOps";



const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}





const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => builder
  .addCase(apiGetContacts.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = false; 
  })
  .addCase(apiGetContacts.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items = action.payload
  })
  .addCase(apiGetContacts.rejected, (state) => {
    state.contacts.loading = false;
    state.contacts.error = true; 
  })
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
