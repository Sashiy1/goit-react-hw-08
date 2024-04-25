import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contactsDetails.contacts.items;
export const selectContactsDetailsIsLoading = (state) =>
  state.contactsDetails.contacts.loading;
export const selectContactsDetailsIsError = (state) =>
  state.contactsDetails.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    )
);
