import styled from 'styled-components'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'
import { formatter } from '../utils'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ItemDetail = ({ product }) => {
  const { addItem } = useCartContext()

  function addProductToCart(product, quantity) {
    const notify = () => toast(`Producto ${product.title} añadido!`)
    notify()
    addItem(product, quantity)
  }

  return (
    <ProductContainer>
      <ToastContainer />
      <ProductImageContainer id='image-area'>
        <img
          src={`${window.location.origin}/${product?.images?.large}`}
          alt={product?.tinyDescription}
        />
      </ProductImageContainer>
      <div id='info-area'>
        <ProductInfo id='info-area' style={{ gridArea: 'info-area' }}>
          <h2 className='title'>{product?.title?.toUpperCase()}</h2>
          <span className='price'>{`${formatter.format(product?.price)}`}</span>
          <hr />
          <p className='info'>{`AUTOR: ${product?.author}`}</p>
          <p className='info'>{`CATEGORIA: ${
            String(product?.category).charAt(0).toUpperCase() + String(product?.category).slice(1)
          }`}</p>
          <p className='info'>{`VENDIDOS: ${product?.sold}`}</p>
          <p className='info'>{`STOCK: ${product?.stock}`}</p>
        </ProductInfo>
        <hr />
        <ItemCount addProductToCart={addProductToCart} product={product} />
      </div>

      <ProductSinopsis id='sinopsis-area'>
        <h3>Sinopsis</h3>
        <p>{product?.description}</p>
      </ProductSinopsis>
    </ProductContainer>
  )
}
export default ItemDetail

const ProductContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    'image-area'
    'info-area'
    'sinopsis-area';

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'image-area info-area'
      'image-area info-area'
      'sinopsis-area sinopsis-area';
  }
`
const ProductImageContainer = styled.div`
  grid-area: image-area;
  max-width: 230px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    :hover {
      transform: scale(1.4) translateY(10%);
    }
  }
`
const ProductInfo = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: #333;

  .title {
    font-weight: 300;
    font-family: 'Inter';
  }
  .price {
    font-size: 2rem;
    font-weight: bold;
  }
  .info {
    font-style: italic;
    font-weight: bold;
    color: inherit;
  }
`
const ProductSinopsis = styled.div`
  grid-area: sinopsis-area;
  margin-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6;
  p {
    background-color: #222;
    color: white;
    padding: 1rem;
  }
`
