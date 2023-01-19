import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const cardPaymentSlice = createSlice({
    name: 'cardPayment',
    initialState,
    reducers: {
        addInfoCardPayment: (state, action) => {
            Object.assign(state, action.payload)
        },
    }
})

export const { addInfoCardPayment } = cardPaymentSlice.actions

export default cardPaymentSlice.reducer