import { createContext, useContext, useState } from 'react'

const cartContext = createContext({})
cartContext.displayName = 'Contexto Carrito'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id) ? true : false
  }

  const countItems = () => {
    return cart.reduce((prev, prod) => {
      return prev + parseInt(prod.quantity)
    }, 0)
  }

  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      return newCart.push({ ...product, quantity })
    }

    const copy = [...cart]
    copy.forEach((prod) => {
      if (prod.id === adding.id) {
        prod.quantity += quantity
      }
    })
    setCart(copy)
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }

  const clear = () => {
    setCart([])
  }

  return (
    <cartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, setCart, countItems }}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider

export const useCartContext = () => {
  return useContext(cartContext)
}
