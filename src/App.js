import { Route, Routes } from 'react-router-dom'
import { ContainerColumn } from './components/styled-components/Containers'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
function App() {
  return (
    <>
      <Navbar />
      <ContainerColumn>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<ItemListContainer />} />
          <Route path='/categories/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </ContainerColumn>
    </>
  )
}

export default App
