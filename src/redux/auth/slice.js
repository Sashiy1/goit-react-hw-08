import { createSlice } from "@reduxjs/toolkit";
import { apiLoginUser, apiRefreshUser, apiRegisterUser } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoggedIn = false;
      })

      .addCase(apiLoginUser.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

// Генератори екшенів
// export const {   } = authSlice.actions;
// Редюсер слайсу
export const authReducer = authSlice.reducer;
