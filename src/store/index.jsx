import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../slices/messageSlice'
import listaTarefasReducer from '../slices/listaTarefasSlice'

export default configureStore({
    reducer: {
        message: messageReducer,
        listaTarefas: listaTarefasReducer,
    }
})
