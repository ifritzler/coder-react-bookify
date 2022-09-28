import styled from 'styled-components'

const HomeCard = ({ title, image, description }) => {
  return (
    <Container>
      <div className='image'>
        <img src={image} />
      </div>
      <div className='info'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default HomeCard

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  min-height: 220px;
  background-color: #f0d1d1;

  .image {
    img {
      width: 150px;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    padding: 1rem;
    h2 {
      margin-bottom: 0.7rem;
    }
    p {
      line-height: 1.45;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: calc(0.7rem - 3vw);
    .info {
      padding: 5vw;
    }
    .image {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
  }
`
