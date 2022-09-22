import './Cart.sass'
import Header from './Header'
import CartList from './CartList'
import Summary from './Summary'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

function Cart() {
  const { removeItem, cart, setCart, countItems } = useCartContext()
  const [totals, setTotals] = useState({ itemCount: 0, subTotal: 0 })

  function calculateTotals() {
    setTotals({
      itemCount: countItems(),
      subTotal: cart.reduce((prev, prod) => {
        return parseInt(prev + prod.price * parseInt(prod.quantity))
      }, 0),
    })
  }

  const onChangeProductQuantity = (id, event) => {
    try {
      const newQuantity = event.target.value
      let cartCopy = [...cart]

      cartCopy = cartCopy.map((product) => {
        if (product.id === id && newQuantity <= product.stock) {
          return { ...product, quantity: newQuantity }
        }
        return product
      })

      /// ---------------------------------------
      calculateTotals()
      /// ---------------------------------------
      setCart(cartCopy)
    } catch (error) {
      console.log(error)
    }
  }

  const onRemoveProduct = (id) => {
    removeItem(id)
  }

  useEffect(() => {
    calculateTotals()
  }, [cart])

  return (
    <div>
      <Header itemCount={totals.itemCount} />

      {cart.length > 0 ? (
        <div>
          <CartList
            products={cart}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary subTotal={totals.subTotal} />
        </div>
      ) : (
        <div className='empty-product'>
          <h3>Aun no cargaste productos a tu carrito.</h3>
          <Link to={'/tienda'}>Compra ahora</Link>
        </div>
      )}
    </div>
  )
}

export default Cart
