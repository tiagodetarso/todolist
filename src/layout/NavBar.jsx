import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container } from './Container'
import { Mensagem } from './Mensagem'

import styles from './NavBar.module.css'

import logo from '../logo192.png'

export const NavBar = () => {

    const tipoMensagem = useSelector((state) => state.message.tipoMensagem)

    return (
        <nav className={styles.navbar}>
            <Container customClass='column_width'>
                <Container>
                    <img src={logo} alt="traditti" />
                    <h1 className={styles.title}>Gerenciador de Tarefas</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/inicio">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/criar">Criar</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/listar">Tarefas</Link>
                        </li>
                    </ul>
                </Container>
                <div style={{height: '1.5em', width: '100%'}}>
                    <Mensagem type={tipoMensagem} />
                </div>
            </Container>
        </nav>    
    )
}