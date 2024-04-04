export const isAuthSelector = (state) => state.auth.token;
export const profileSelector = (state) => state.auth.message;
// export const profileSelector = (state) => state.auth.user;
export const messageSelector = (state) => state.auth.message; 
export const isLoggedInSelector = (state) => state.auth.isLogin;
export const IsRefreshingSelector = state => state.auth.isRefreshing;

