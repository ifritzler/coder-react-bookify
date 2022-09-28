import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
      </Routes>
    </>
  )
}

export default App
