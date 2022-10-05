import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartWidget from './CartWidget'
import { Container } from './Containers'
import { Icon, Icons } from './Icons'

const Navbar = () => {
  const [openState, setOpenState] = useState(false)
  return (
    <Header>
      <HeaderContainer>
        <Link to={'/'}>
          <Logo>Bookify</Logo>
        </Link>
        <Icons>
          <CartWidget />
          <Icon className={'menu'} onClick={() => setOpenState(!openState)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='inherit'
              color='inherit'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </Icon>
        </Icons>
        <Navigation className={`${openState ? 'open' : ''}`}>
          <NavigationLinks>
            <li>
              <Link to={'/tienda'}>Tienda</Link>
            </li>
            <li>
              <Link to={'/categories/fantasia'}>Fantasia</Link>
            </li>
            <li>
              <Link to={'/categories/terror'}>Terror</Link>
            </li>
            <li>
              <Link to={'/categories/novela'}>Novela</Link>
            </li>
            <li>
              <Link to={'/categories/aventura'}>Aventura</Link>
            </li>
          </NavigationLinks>
        </Navigation>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9;
  position: sticky;
`

const Header = styled.header`
  background-color: #f0d1d1;
  color: #333333;
`
const Logo = styled.span`
  font-size: min(calc(1.3rem + 0.3vw), 2rem);
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  position: relative;
  top: 100%;
  left: 0;
  width: 100%;
  height: max-content;
  background-color: #f0d1d1;
  order: 1;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    li {
      padding: 1rem;
      text-align: center;
      font-weight: bold;
      a {
        display: inline-block;
        width: 100%;
      }
    }
  }
  &.open {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: block;
    flex-direction: row;
    width: auto;
    ul {
      flex-direction: row;
      gap: 1rem;
      li {
        font-weight: 500;
        padding: 0.3rem;
      }
    }
  }
`
const NavigationLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  li:hover {
    font-weight: bold;
  }
`
