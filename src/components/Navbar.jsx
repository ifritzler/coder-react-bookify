import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContainerRow } from './Containers'

const Navbar = () => {
  return (
    <Header>
      <ContainerRow>
        <Link to={'/'}>
          <Logo>Bookify</Logo>
        </Link>
        <Navigation>
          <NavigationLinks>
            <li>
              <Link to={'/tienda'}>Tienda</Link>
            </li>
            <li>
              <Link to={'/carrito'}>Carrito</Link>
            </li>
          </NavigationLinks>
        </Navigation>
      </ContainerRow>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  background-color: #f0d1d1;
  color: #333333;
  .container {
    min-height: 60px;
    gap: 3vw;
    > a {
      display: grid;
      place-content: center;
      font-weight: bold;
    }
  }
`
const Logo = styled.span`
  font-size: min(calc(1.3rem + 0.3vw), 2rem);
`
const Navigation = styled.nav`
  display: grid;
  place-content: center;
`
const NavigationLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  li:hover {
    font-weight: bold;
  }
`
