import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { useCartContext } from '../context/cartContext'

const Cart = () => {
  const { cart, updateItemQuantity, removeItem } = useCartContext()

  const addItem = (id, quantity) => {
    updateItemQuantity(id, quantity + 1)
  }

  const decrementItem = (id, quantity) => {
    updateItemQuantity(id, quantity - 1)
  }

  const deleteItem = (id) => {
    removeItem(id)
  }

  return (
    <CartContainer>
      <CartList id='cart-list'>
        {cart.map((item) => {
          return (
            <>
              <CartItem
                item={item}
                addItem={addItem}
                decrementItem={decrementItem}
                deleteItem={deleteItem}
              />
              <hr />
            </>
          )
        })}
      </CartList>
    </CartContainer>
  )
}
export default Cart

const CartContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cart-list .'
    'cart-list .';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`
const CartList = styled.div`
  grid-area: cart-list;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;
`
