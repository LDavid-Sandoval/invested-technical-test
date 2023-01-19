import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../config/userData'
import uuid from "react-uuid";


const initialState = data

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const {
                email,
                firstName,
                lastName,
                mount,
                secondLastName,
                createdBy
            } = action.payload
            const newItem = {
                id: uuid(),
                firstName,
                lastName,
                secondLastName,
                email,
                partialPayment: mount,
                mount:  `$${(mount * 25).toFixed(2)}`,
                estatusPayment: mount === 4 ? true : false,
                dateLastPayment: new Date().toISOString(),
                createdAt: new Date().toISOString(),
                createdBy,
                updatedAt: new Date().toISOString(),
            }
            state.push(newItem)
        }, 
        addPayment: (state, action) => {
            const  {
                ID,
                dateLastPayment,
                estatusPayment,
                mount,
                partialPayment,
                updatedBy,
            } = action.payload
            const foundItem = state.find( item => item.id === ID)
            if (foundItem) {
                foundItem.dateLastPayment = dateLastPayment
                foundItem.estatusPayment = estatusPayment
                foundItem.mount = mount
                foundItem.partialPayment = partialPayment
                foundItem.updatedBy = updatedBy
            }
        }
    }
})

export const { addItem, addPayment } = dataSlice.actions

export default dataSlice.reducer