import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    roles: [],
    users: [],
}

const userManagement = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        roleValue(state, action) {
            state.roles = action.payload.roles;
        },
        userValue(state, action) {
            state.users = action.payload.users;
        }
    }
});

export const { roleValue, userValue } = userManagement.actions;

export default userManagement.reducer