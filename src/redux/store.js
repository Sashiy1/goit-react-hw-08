import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsDetailsConfig = {
  key: "contactsDetails",
  storage,
  whitelist: ["contacts"],
//   blacklist: ['contacts', "isError", "isLoading", "productData"],
};



export const store = configureStore({
  reducer: {
    contactsDetails: persistReducer(contactsDetailsConfig, contactsReducer), 
    filtersDetails:  filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);