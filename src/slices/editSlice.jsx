import { createSlice } from '@reduxjs/toolkit'

export const editSlice = createSlice({
    name: 'edit',
    initialState: {
        editItems:{}
    },
    reducers: {
        setObject: (state, action) => {
            state.editItems = action.payload
        },
    },
})

export const {
    setObject}= editSlice.actions
    
export default editSlice.reducer