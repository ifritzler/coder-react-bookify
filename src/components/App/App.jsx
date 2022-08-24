import { CartWidget } from '../CartWidget'
import { Navbar } from '../Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

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
