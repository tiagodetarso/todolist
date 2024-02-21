import { createSlice } from '@reduxjs/toolkit'

export const listaTarefasSlice = createSlice({
    name: 'listaTarefa',
    initialState: {
        listaTarefasItems:[],
    },
    reducers: {
        setItem: (state, action) => {
            state.listaTarefasItems = action.payload
        },
        addItem: (state, action) => {
            state.listaTarefasItems.push(action.payload)
        },
        excludeItem: (state) => {
                state.listaTarefasItems = []
        },
    },
})

export const {
    setItem,
    addItem,
    excludeItem}= listaTarefasSlice.actions
    
export default listaTarefasSlice.reducer