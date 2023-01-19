import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import dataReducer from '../features/data/dataSlice'
import cardPaymentReducer from '../features/CardPayment/cardPaymentSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
        cardPayment: cardPaymentReducer
    }
})