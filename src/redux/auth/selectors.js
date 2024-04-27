
export const selectUserData = (state) => state.authorizationDetails.user;
export const selectUserName = (state) => state.authorizationDetails.user.name;
export const selectUserEmail = (state) => state.authorizationDetails.user.email;
export const selectToken = (state) => state.authorizationDetails.token;
export const selectIsLoggedIn = (state) => state.authorizationDetails.isLoggedIn;
export const selectIsRefreshing = (state) => state.authorizationDetails.isRefreshing;



