import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header>
      <Logo>Bookify</Logo>
      <Navigation>
        <NavigationLinks>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/tienda'}>Tienda</Link>
          </li>
          <li>
            <Link to={'/carrito'}>Carrito</Link>
          </li>
        </NavigationLinks>
      </Navigation>
    </Header>
  )
}

export default Navbar

const Header = styled.header``
const Logo = styled.span``
const Navigation = styled.nav``
const NavigationLinks = styled.ul``
