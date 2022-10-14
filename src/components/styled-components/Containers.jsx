import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  padding: min(1rem, 3vw);
  flex-wrap: wrap;
  margin: 0 auto;
`
const ContainerRow = styled(Container)``
const ContainerColumn = styled(Container)`
  flex-direction: column;
`

export { Container, ContainerRow, ContainerColumn }
