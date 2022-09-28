import { Route, Routes } from 'react-router-dom'
import { ContainerColumn } from './components/Containers'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <ContainerColumn>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContainerColumn>
    </>
  )
}

export default App
