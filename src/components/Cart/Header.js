function Header({ itemCount }) {
  return (
    <header className='container'>
      <h1 className='title'>Carrito de compra</h1>

      <span className='count'>{itemCount} items in the bag</span>
    </header>
  )
}

export default Header
