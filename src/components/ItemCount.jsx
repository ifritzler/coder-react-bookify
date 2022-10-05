import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemCount = ({ product, addProductToCart }) => {
  const [count, setCount] = useState(1)

  const handleClick = (e) => {
    if (e.target.value >= product?.stock) {
      return setCount(product?.stock - 1)
    }
    if (e.target.value <= 0) return setCount(1)
    setCount(e.target.value)
  }

  const handleAdd = (e) => {
    addProductToCart(product, count)
    setCount(1)
  }

  return (
    <ItemCountContainer>
      <CountContainer>
        <label htmlFor='cantidad'>Cantidad</label>
        <input type='number' onChange={handleClick} value={count} id='cantidad' />
      </CountContainer>
      <ItemCountButton onClick={handleAdd}>Agregar al carrito</ItemCountButton>
      <ItemCountButton>
        <Link to={'/cart'}>Finalizar Compra</Link>
      </ItemCountButton>
    </ItemCountContainer>
  )
}
export default ItemCount

const ItemCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
  gap: 1rem;
  flex-wrap: wrap;

  input {
    padding: 1rem;
    text-align: center;
    max-width: 150px;
  }
`

const ItemCountButton = styled.button`
  font-weight: bold;
  flex: 1;
  border: 0;
  width: 100%;
  border-radius: 0.25rem;
  background: #e78b8b;
  color: #333;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-top: auto;
`
