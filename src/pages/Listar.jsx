import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsPencilFill } from "react-icons/bs"
import { TiDelete } from "react-icons/ti"

import { Container } from "../layout/Container"
import { Button } from '../formItems/button'

import { setItem } from '../slices/listaTarefasSlice'
import { setObject } from '../slices/editSlice'
import styles from './Listar.module.css'

export const Listar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ listaTarefas, setListaTarefas ] = useState(useSelector((state) => state.listaTarefas.listaTarefasItems))
    
    useEffect(() => {
        dispatch(setItem(listaTarefas))
    }, [listaTarefas, dispatch])

    const handleDownload = () => {
        console.log(listaTarefas)
        const json = JSON.stringify(listaTarefas);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download ='listaDeTarefas.json';
        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }

    const deleteTarefa = (array, objeto) => {
        const indice = array.indexOf(objeto)
        if (indice !== -1) {
            let novoArray = array.filter((objeto, idc) => idc !== indice)
            setListaTarefas(novoArray)
        }
    }

    const irEdicaoTarefa = (task) => {
        dispatch(setObject(task))
        navigate('/editar')
    }

    return (
        <Container customClass='column'>
            <h2 className={styles.texth2}>Lista de Tarefas</h2>
            <Button text='Salvar lista localmente' handleOnClick={handleDownload} />
            <div>
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <td className={styles.celtabhead}>Título</td>
                            <td className={styles.celtabhead}>Descrição</td>
                            <td className={styles.celtabhead}>Status</td>
                            <td className={styles.celtabhead}>Prazo</td>
                            <td className={styles.celtabhead}>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        { listaTarefas.length > 0 && 
                        listaTarefas.map((tarefa) => (
                            <tr>
                                <td className={styles.celtabbody}>{tarefa.title}</td>
                                <td className={styles.celtabbody}>{tarefa.specification}</td>
                                <td className={styles.celtabbody}>{tarefa.status}</td>
                                <td className={styles.celtabbody}>{tarefa.deadline}</td>
                                <td className={styles.celtabicon}> 
                                    <button
                                        type="button"
                                        onClick={() => irEdicaoTarefa(tarefa)}
                                    >
                                        <BsPencilFill className={styles.iconedit}/>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => deleteTarefa(listaTarefas, tarefa)}
                                    >
                                        <TiDelete className={styles.icondelete}/>
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    )
}