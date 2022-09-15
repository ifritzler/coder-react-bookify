import { createContext, useContext, useState } from 'react'

const cartContext = createContext({})
cartContext.displayName = 'Contexto Carrito'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id) ? true : false
  }

  const addItem = (product, quantity) => {
    const adding = { ...product, quantity }
    const newCart = [...cart]

    if (!isInCart(product.id)) {
      newCart.push(adding)
    } else {
      newCart.forEach((prod) => {
        if (prod.id === adding.id) {
          prod.quantity += quantity
        }
      })
    }
    console.log(newCart)
    setCart(newCart)
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }

  const clear = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider

export const useCartContext = () => {
  return useContext(cartContext)
}
