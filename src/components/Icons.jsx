import styled from 'styled-components'

export const Icons = styled.div`
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

export const Icon = styled.div`
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
