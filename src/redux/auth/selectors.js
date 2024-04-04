export const isAuthSelector = (state) => state.auth.token;
export const profileSelector = (state) => state.auth.user;
export const messageSelector = (state) => state.auth.message;