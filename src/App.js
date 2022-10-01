import { Route, Routes } from 'react-router-dom'
import { ContainerColumn } from './components/Containers'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer'
function App() {
  return (
    <>
      <Navbar />
      <ContainerColumn>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<ItemListContainer />} />
          <Route path='/tienda/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </ContainerColumn>
    </>
  )
}

export default App
