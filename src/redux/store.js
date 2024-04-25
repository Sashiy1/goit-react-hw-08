import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
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

const authDetailsConfig = {
  key: "authDetails",
  storage,
  whitelist: ["contacts"],
  //   blacklist: ['contacts', "isError", "isLoading", "productData"],
};

export const store = configureStore({
  reducer: {
    contactsDetails: contactsReducer,
    filtersDetails: filterReducer,
    authorizationDetails: persistReducer(authDetailsConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
