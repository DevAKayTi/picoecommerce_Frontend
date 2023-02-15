import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    permission: null,
    token: null
}

const authUser = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        authControl(state, action) {
            state.userInfo = action.payload.userInfo;
        },
        authPermission(state, action) {
            state.permission = action.payload.permission;
        },
        authToken(state, action) {
            state.token = action.payload.token;
        }

    }
});

export const { authControl, authToken, authPermission } = authUser.actions;

export default authUser.reducer