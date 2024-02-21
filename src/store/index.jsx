import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../slices/messageSlice'
import listaTarefasReducer from '../slices/listaTarefasSlice'
import editReducer from '../slices/editSlice'

export default configureStore({
    reducer: {
        message: messageReducer,
        listaTarefas: listaTarefasReducer,
        edit: editReducer,
    }
})
