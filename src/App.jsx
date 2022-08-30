import { CartWidget } from './components/CartWidget'
import { Navbar } from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<main>
				<CartWidget />
				<ItemListContainer greeting='Tutor' />
			</main>
		</div>
	)
}

export default App
