import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addItem } from '../slices/listaTarefasSlice'
import { setMensagem, setTipoMensagem } from '../slices/messageSlice'

import { Container } from "../layout/Container"
import { NewTaskForm } from '../forms/NewTaskForm'

import styles from './Home.module.css'

export const Criar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const messageCount = useSelector((state) => state.message.mensagem.count)

    const criarTarefa = (dados) => {
        try {
            dispatch(addItem(dados))
            navigate('/listar')
            dispatch(setMensagem({msg: "Tarefa criada com sucesso!", count: messageCount+1}))
            dispatch(setTipoMensagem('success'))
        } catch (error) {
            console.log()
            dispatch(setMensagem({msg: "Algo deu errado!", count: messageCount+1}))
            dispatch(setTipoMensagem('error'))
        }
    }
    
    return (
        <Container customClass='column'>
            <h2 className={styles.texth2}>Criando Tarefa</h2>

            <NewTaskForm btnText="Criar Tarefa" handleSubmit={criarTarefa}/>
            
        </Container>
    )
}