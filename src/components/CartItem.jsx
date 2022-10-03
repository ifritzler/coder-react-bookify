import styled from 'styled-components'
import { Icon } from './Icons'

const CartItem = ({ item, addItem, decrementItem, deleteItem }) => {
  return (
    <CartItemContainer>
      <img src={item.images.small} alt='' />
      <div className='heading-container'>
        <div className='heading'>
          <h2 className='title'>{item.title}</h2>
          <div className='price'>
            <span>Cantidad: {item.quantity}</span>
            <span>Subtotal: ${item.price * item.quantity}</span>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <Icon className='icon' onClick={() => addItem(item.id, item.quantity)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </Icon>
        <Icon className='icon' onClick={() => decrementItem(item.id, item.quantity)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
          </svg>
        </Icon>
        <Icon className='icon' onClick={() => deleteItem(item.id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
        </Icon>
      </div>
    </CartItemContainer>
  )
}

export default CartItem

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: min(5vw, 1rem);
  width: 100%;
  h2 {
    flex: 1;
  }
  span {
    font-size: 0.9em;
    flex: 1;
    /* text-align: center; */
  }
  .heading-container {
    display: flex;
    align-items: center;
    gap: min(5vw, 1rem);
    width: 100%;
    justify-content: space-between;
    .heading {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    .price {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.3rem;
    }
  }
  .title {
    font-size: 1.2rem;
    font-weight: 400;
  }
  .buttons {
    .icon {
      cursor: pointer;
    }
  }
`
