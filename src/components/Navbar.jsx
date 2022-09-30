import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './Containers'
import { useState } from 'react'
import { useCartContext } from '../context/cartContext'

const Navbar = () => {
  const [openState, setOpenState] = useState(false)
  const { countItems } = useCartContext()
  return (
    <Header>
      <HeaderContainer>
        <Link to={'/'}>
          <Logo>Bookify</Logo>
        </Link>
        <Icons>
          <Icon className='cart' quantity={countItems()}>
            <span>{countItems() > 9 ? '9+' : countItems()}</span>
            <Link to={'/carrito'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </Link>
          </Icon>
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
              <Link to={'/tienda/fantasia'}>Fantasia</Link>
            </li>
            <li>
              <Link to={'/tienda/terror'}>Terror</Link>
            </li>
            <li>
              <Link to={'/tienda/novela'}>Novela</Link>
            </li>
            <li>
              <Link to={'/tienda/aventura'}>Aventura</Link>
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

const Icons = styled.div`
  display: flex;
  order: 1;
  gap: 1rem;
  .cart {
    position: relative;
    span {
      position: absolute;
      top: 0px;
      right: -4px;
      width: 15px;
      height: 15px;
      font-size: 10px;
      border-radius: 50%;
      display: flex;
      padding: 0.6rem;
      justify-content: center;
      align-items: center;
      background-color: red;
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    order: 2;
  }
`

const Icon = styled.div`
  width: 30px;
  svg {
    width: 100%;
    aspect-ratio: 1/1;
  }
  @media screen and (min-width: 768px) {
    &.menu {
      display: none;
    }
  }
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
