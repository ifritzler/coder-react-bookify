import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import { CART, EXPLORE, HOME, LOGIN, PRIVATE, DETAIL, EXPLORE_CATEGORY } from './routes/paths'
import Explore from './views/Explore/Explore'
import Home from './views/Home/Home'
import Login from './views/Login'
import NotFound from './views/notFound'
import Private from './views/Private'
import PrivateRoutes from './views/PrivateRoutes'
import PublicRoutes from './views/PublicRoutes'
import Detail from './views/Detail/Detail'
import CartProvider from './context/cartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path={HOME} element={<PublicRoutes />}>
            <Route path={HOME} index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={EXPLORE} element={<Explore />} />
            <Route path={EXPLORE_CATEGORY} element={<Explore />} />
            <Route path={DETAIL} element={<Detail />} />
            <Route path={CART} element={<Cart />} />
          </Route>

          <Route path={PRIVATE} element={<PrivateRoutes />}>
            <Route path={PRIVATE} index element={<Private />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* Footer Slot*/}
      </CartProvider>
    </>
  )
}

export default App
