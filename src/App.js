import { Route, Routes } from 'react-router-dom'
import { ContainerColumn } from './components/Containers'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tienda from './pages/Tienda'

function App() {
  return (
    <>
      <Navbar />
      <ContainerColumn>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/tienda/:category' element={<Tienda />} />
          <Route path='/producto/:idProducto' element={<Tienda />} />
        </Routes>
      </ContainerColumn>
    </>
  )
}

export default App
