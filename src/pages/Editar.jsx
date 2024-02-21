import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EditTaskForm } from '../forms/EditTaskForm'
import { setItem, excludeItem } from '../slices/listaTarefasSlice'

import { Container } from "../layout/Container"

import styles from './Home.module.css'

export const Editar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const tarefas = useState(useSelector((state) => state.listaTarefas.listaTarefasItems))

    const forEdition = useSelector((state) => state.edit.editItems)

    const editarTarefa = (novoObjeto) => {
        const indice = tarefas[0].indexOf(forEdition)
        let newArray = [...tarefas[0]]
        console.log(newArray)
        newArray.splice(indice, 1, novoObjeto)
        dispatch(excludeItem())
        dispatch(setItem(newArray))
        navigate('/listar')
    }
    
    return (
        <Container customClass='column'>
            <h2 className={styles.texth2}>Edição de Tarefa</h2> 
            <EditTaskForm btnText="Editar Tarefa" handleSubmit={editarTarefa}/>
        </Container>
    )
}