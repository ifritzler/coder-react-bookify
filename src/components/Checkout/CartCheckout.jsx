import styled from 'styled-components'
import { useCartContext } from '../../context/cartContext'
import { formatter } from '../../utils'
import FormCheckout from './FormCheckout'

const CartCheckout = () => {
  const { calculateTotals } = useCartContext()
  return (
    <CartCheckOut id='checkout'>
      <div className='total'>
        <span>Total:</span>
        <span>{formatter.format(calculateTotals())}</span>
      </div>
      <FormCheckout>
        <div className='cta'>Comprar</div>
      </FormCheckout>
    </CartCheckOut>
  )
}
export default CartCheckout

const CartCheckOut = styled.div`
  grid-area: checkout;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    padding-inline: 2rem;
  }
  .total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  .cta {
    background-color: #333;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }
`
