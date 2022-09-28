import styled from 'styled-components'

const ContainerRow = ({ children }) => {
  return <Container className='container'>{children}</Container>
}

const ContainerColumn = ({ children }) => {
  return <Container className='container column'>{children}</Container>
}

export { ContainerRow, ContainerColumn }

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  padding: min(1rem, 3vw);
  flex-wrap: wrap;
  margin: 0 auto;
  &.column {
    flex-direction: column;
  }
`
