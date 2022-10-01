import styled from 'styled-components'
import CardProduct from './CardProduct'
import { Container } from './Containers'

const ItemList = ({ products }) => {
  return (
    <ProductContainer>
      {/* Quitar el classname una vez confeccionado */}
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </ProductContainer>
  )
}
export default ItemList

const ProductContainer = styled(Container)`
  gap: 1rem;
  justify-content: center;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
