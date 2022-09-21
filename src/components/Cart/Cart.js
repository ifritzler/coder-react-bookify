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
  const { removeItem, cart, addItem } = useCartContext()
  const [products, setProducts] = useState([])
  const [totals, setTotals] = useState({ itemCount: 0, subTotal: 0 })

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value
    const valueInt = parseInt(value)
    const cloneProducts = [...cart]

    if (value === '') {
      cloneProducts[index].quantity = value
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt
    }
    setProducts(cloneProducts)
  }

  const onRemoveProduct = (id) => {
    removeItem(id)
  }

  useEffect(() => {
    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(cart))
    setProducts(CLONE_PRODUCTS)
    if (products.length > 0) {
      setTotals({
        ...totals,
        itemCount: cart.reduce((quantity, product) => {
          return quantity + product.quantity
        }, 0),
      })
    }

    if (products.length > 0) {
      setTotals({
        ...totals,
        subTotal: cart.reduce((total, product) => {
          return total + product.price * product.quantity
        }, 0),
      })
    }
  }, [cart])

  return (
    <div>
      <Header itemCount={totals.itemCount} />

      {products.length > 0 ? (
        <div>
          <CartList
            products={products}
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
