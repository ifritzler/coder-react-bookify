import { CartWidget } from './components/CartWidget'
import { ItemListContainer } from './components/ItemListContainer'
import { Navbar } from './components/Navbar'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <ItemListContainer />
        <CartWidget />
      </main>
    </div>
  )
}

export default App
