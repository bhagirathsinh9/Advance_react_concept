import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: {},
        loading: false,
         error: null,
    },
    reducers:{
        setAuthUser: (state, action) => {
            state.users = action.payload;
        }
    },

});


export const { setAuthUser } = userSlice.actions;
export default userSlice.reducer;
