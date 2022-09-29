import { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const cartContext = createContext({})
cartContext.displayName = 'Contexto Carrito'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', [])

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id) ? true : false
  }

  const countItems = () => {
    return cart.reduce((prev, prod) => {
      return prev + parseInt(prod.quantity)
    }, 0)
  }

  const addItem = (product, quantity) => {
    const copy = [...cart]

    if (!isInCart(product.id)) {
      copy.push({ ...product, quantity: parseInt(quantity) })
      return setCart(copy)
    }

    copy.forEach((prod) => {
      if (prod.id === product.id) {
        prod.quantity += parseInt(quantity)
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
