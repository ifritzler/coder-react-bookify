import { CartWidget } from './components/CartWidget'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/category/:id' element={<Products />} />
          <Route path='/products/detail/:id' element={<Products />} />
          {/* <Route path='*' element={<div>Aun no hay nada por aqui!</div>} /> */}
        </Routes>
        <CartWidget />
      </main>
    </div>
  )
}

export default App
