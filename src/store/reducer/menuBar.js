import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openItem: ['dashboard'],
    drawerOpen: true,
}

const menuBar = createSlice({
    name: 'menuBar',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.openItem = action.payload.openItem;
        },
        openDrawer(state, action) {
            state.drawerOpen = action.payload.drawerOpen
        }
    }
});

export const { activeItem, openDrawer } = menuBar.actions;

export default menuBar.reducer