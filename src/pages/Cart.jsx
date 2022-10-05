import styled from 'styled-components'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'
import { useCartContext } from '../context/cartContext'
import CartCheckout from '../components/Checkout/CartCheckout'

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

  if (cart.length > 0) {
    return (
      <CartContainer>
        <CartList id='cart-list'>
          {cart.map((item, index) => {
            return (
              <>
                <CartItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  decrementItem={decrementItem}
                  deleteItem={deleteItem}
                />
                <hr key={index} />
              </>
            )
          })}
        </CartList>
        <CartCheckout />
      </CartContainer>
    )
  } else {
    return <EmptyCart />
  }
}
export default Cart

const CartContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cart-list'
    'checkout';

  @media screen and (min-width: 768px) {
    grid-template-areas:
      'cart-list checkout'
      'cart-list checkout';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`

const CartList = styled.div`
  grid-area: cart-list;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;
`
