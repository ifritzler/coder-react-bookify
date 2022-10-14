import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image1 from '../assets/pexels-photo-1.jpeg'
import image2 from '../assets/pexels-photo-2.jpeg'
import HomeCard from '../components/HomeCard'
import { Container } from '../components/styled-components/Containers'

const Home = () => {
  return (
    <>
      <Container>
        <CtaContainer>
          <Link to={'/tienda'}>
            <div className='cta'>Ir a la tienda</div>
          </Link>
        </CtaContainer>
      </Container>
      <CardsContainer>
        <HomeCard
          title={'Historias unicas que te cautivaran'}
          description={
            'Nos encargamos de llevarte las historias mas encantadoras y fascinantes de la literatura universal y moderna, para que vivas una experiencia unica y te transportes al universo de cada una de estas maravillas'
          }
          image={image1}
        />
        <HomeCard
          title={'Los mejores titulos'}
          description={
            'Con nosotros encontraras los mejores titulos al mejor precio. Tenemos una amplia variadad de titulos que haran volar tu imaginacion.'
          }
          image={image2}
        />
      </CardsContainer>
    </>
  )
}

export default Home

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.5rem;
`
const CtaContainer = styled.div`
  margin-bottom: 2rem;
  .cta {
    margin-top: 1rem;
    background-color: red;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
  }
`
