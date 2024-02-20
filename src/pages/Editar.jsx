//import { useSelector, useDispatch } from 'react-redux'

//import { addItem } from '../slices/listaTarefasSlice'

import { Container } from "../layout/Container"

import styles from './Home.module.css'

export const Editar = () => {

    //const dispatch = useDispatch()

   
    
    return (
        <Container customClass='column'>
            <h2 className={styles.texth2}>Edição de Tarefa</h2>  
        </Container>
    )
}