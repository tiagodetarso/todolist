import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Input } from '../formItems/input'
import { TextArea } from '../formItems/textArea'
import { Select } from '../formItems/select'
import { SubmitButton } from '../formItems/SubmitButton'

import styles from './Form.module.css'

export const EditTaskForm = ({ handleSubmit, btnText }) => {

    const [ task, setTask ] = useState(useSelector((state) => state.edit.editItems))
    
    const status = [ "Não iniciada", "Em execução", "Atrasada", "Concluída" ]

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(task)
    }

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Título"
                name="title"
                placeholder="título da tarefa"
                handleOnChange={handleChange}
                value={task.title}
            />
            <TextArea
                text="Descrição"
                name="specification"
                cols={1}
                rows={3}
                maxLength={300}
                placeholder="descrição da tarefa"
                handleOnChange={handleChange}
                value={task.specification}
            />
            <Select
                name="status"
                ops={status}
                text="Status"
                size={1}
                handleOnChange={handleChange}
                value={task.status}
            />
            <Input 
                type="date"
                text="Prazo para conclusão"
                name="deadline"
                handleOnChange={handleChange}
                value={task.deadline}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}