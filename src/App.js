import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Container } from './layout/Container'
import { Home } from './pages/Home'
import { NavBar } from './layout/NavBar'
import { Criar } from './pages/Criar'
import { Listar } from './pages/Listar'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/inicio' element={<Home />} />
          <Route path='/criar' element={<Criar />} />
          <Route path='/listar' element={<Listar />} />

          <Route path='*' element={<Navigate to='/inicio' />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

