import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    token: null
}

const authUser = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        authControl(state, action) {
            state.userInfo = action.payload.userInfo;
        },
        authToken(state, action) {
            state.token = action.payload.token
        }

    }
});

export const { authControl, authToken } = authUser.actions;

export default authUser.reducer