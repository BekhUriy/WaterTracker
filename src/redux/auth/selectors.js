export const selectToken = state => state.auth.token;
export const isLoggedInSelector = (state) => state.auth.isLoggedIn;
export const profileSelector = (state) => state.auth.profile;
export const selectUser = state => state.auth.user;
export const selectMessage = state => state.auth.message;
export const selectIsLogin = state => state.auth.message;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;