import './Cart.sass'
import Header from './Header'
import CartList from './CartList'
import Summary from './Summary'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

const PRODUCTS = [
  {
    image: window.location.origin + '/books/small/harry-potter-y-la-piedra-filosofal.jpg',
    name: 'Harry Potter y la piedra filosofal',
    description:
      'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley.',
    price: 2999.99,
    quantity: 2,
  },
  {
    image: window.location.origin + '/books/small/patria-aramburu.jpg',
    name: 'Patria',
    description:
      'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron.',
    price: 3449.99,
    quantity: 1,
  },
]

function Cart() {
  const { removeItem, cart, setCart } = useCartContext()
  const [totals, setTotals] = useState({ itemCount: 0, subTotal: 0 })

  const onChangeProductQuantity = (id, event) => {
    try {
      const newQuantity = event.target.value
      let cartCopy = [...cart]
      console.log(totals)
      cartCopy = cartCopy.map((product) => {
        if (product.id === id && newQuantity <= product.stock) {
          return { ...product, quantity: newQuantity }
        }
        return product
      })
      /// ---------------------------------------
      setTotals({
        itemCount: cartCopy.reduce((prev, prod) => {
          return prev + parseInt(prod.quantity)
        }, 0),
        subTotal: cartCopy.reduce((prev, prod) => {
          return parseInt(prev + prod.price * parseInt(prod.quantity))
        }, 0),
      })
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
    setTotals({
      itemCount: cart.reduce((prev, prod) => {
        return prev + parseInt(prod.quantity)
      }, 0),
      subTotal: cart.reduce((prev, prod) => {
        return parseInt(prev + prod.price * parseInt(prod.quantity))
      }, 0),
    })
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
