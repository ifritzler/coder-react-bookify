import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './Containers'

const CardProduct = ({ product }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <img src={product?.images.large} alt={product?.tinyDescription} />
      </CardImageContainer>
      <CardInfoContainer>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{`${product?.tinyDescription.slice(0, 60)}...`}</CardDescription>
        <CardButton>
          <Link to={`/producto/${product.id}`}>Ver mas</Link>
        </CardButton>
      </CardInfoContainer>
    </CardContainer>
  )
}

export default CardProduct

const CardContainer = styled.div`
  border: 1px solid rgba(51, 51, 51, 0.1);
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: white;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
    z-index: 9;
  }
  @media screen and (min-width: 400px) {
    width: 40%;
    padding: 1rem;
  }
  @media screen and (min-width: 768px) {
    width: 230px;
    padding: 1rem;
  }
`
const CardImageContainer = styled.div`
  flex: 1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const CardInfoContainer = styled(Container)`
  flex: 2;
  gap: 0.3rem;
  padding: 0;
  margin-top: 0.5rem;
`
const CardTitle = styled.h2`
  font-size: 18px;
`
const CardDescription = styled.p`
  font-size: 16px;
`

const CardButton = styled.button`
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
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  margin-top: auto;
`
