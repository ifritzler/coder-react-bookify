import { useCartContext } from '../context/cartContext'

const Cart = () => {
  const { cart } = useCartContext()
  return (
    <div>
      <p>Cart</p>
      {cart.map((item) => {
        return (
          <p key={item.id}>
            {item.title} x{item.quantity}
          </p>
        )
      })}
    </div>
  )
}
export default Cart
