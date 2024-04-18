import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: null,
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

  reducers: {
    setContacts(state, action) {
      state.contacts.items = action.payload;
    },
    setAddContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    setDeleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const {
  setContacts,
  setAddContact,
  setDeleteContact,
} = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

