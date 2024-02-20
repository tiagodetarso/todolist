import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        mensagem:{msg: '', count: 0},
        tipoMensagem: '',
    },
    reducers: {
        setMensagem: (state, action) => {
            state.mensagem = action.payload;
        },
        setTipoMensagem: (state, action) => {
            state.tipoMensagem = action.payload;
        }
    },
})

export const {
    setMensagem,
    setTipoMensagem} = messageSlice.actions
    
export default messageSlice.reducer