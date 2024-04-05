import { createSlice } from "@reduxjs/toolkit";

const logoutModalSlicer = createSlice({
    name: 'logoutModal',
    initialState: {
        isOpen: false
    },
    reducers: {
        modalOpen: state => {
            state.isOpen = true;
        },
        modalClose: state => {
            state.isOpen = false;
        },
        modalLogoutToggle: state => {
            state.isOpen = !state.isOpen;
        },
    }
});

export const { modalOpen, modalClose, modalLogoutToggle } = logoutModalSlicer.actions;
export const selectIsLogoutOpen = state => state.logoutModal.isOpen;
export default logoutModalSlicer.reducer;
