import { createSlice } from "@reduxjs/toolkit";
import {userData} from '../../config/userData'

const initialState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem("name", userData.name); 
            localStorage.setItem("lastName", userData.lastName); 
            localStorage.setItem("email", userData.email); 
            localStorage.setItem("isAdmin", userData.isAdmin); 
            localStorage.setItem("userID", userData.id);
            Object.assign(state, userData)
        }, 
        reset: () => {
            localStorage.removeItem("name"); 
            localStorage.removeItem("lastName"); 
            localStorage.removeItem("email"); 
            localStorage.removeItem("isAdmin"); 
            localStorage.removeItem('userID');
            return initialState
        }
    }
})

export const { login, reset } = userSlice.actions

export default userSlice.reducer