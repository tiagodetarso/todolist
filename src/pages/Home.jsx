import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setItem } from '../slices/listaTarefasSlice'
import { setMensagem, setTipoMensagem } from '../slices/messageSlice'

import { Container } from "../layout/Container"
import { Input } from '../formItems/input'

import styles from './Home.module.css'

export const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const messageCount = useSelector((state) => state.message.mensagem.count)
  
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const jsonData = JSON.parse(e.target.result);
              dispatch(setItem(jsonData));
              dispatch(setMensagem({msg: "Upload bem sucedido!", count: messageCount+1}))
              dispatch(setTipoMensagem("success"))
              navigate('/listar')
            } catch (error) {
              console.error('Erro ao carregar arquivo JSON:', error);
              dispatch(setItem([]))
              dispatch(setMensagem({msg: "Erro ao carregar arquivo JSON", count: messageCount+1}))
              dispatch(setTipoMensagem("error"))
            }
          }
          reader.readAsText(file);
        }
      }

    return (
        <Container customClass='column'>
            <h2 className={styles.texth2}>Escolha um arquivo .json para subir dados</h2>
            <Input
                type='file'
                name='upload'
                handleOnChange={handleFileChange}
                accept='.json'
            />
            <h3 className={styles.texth3}>Ou vá até a aba "Criar" para começar a criar tarefas!</h3>
        </Container>
    )
}

