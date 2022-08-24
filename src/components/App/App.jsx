import { CartWidget } from '../CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Navbar } from '../Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<CartWidget />
			<ItemListContainer greeting='Tutor' />
		</div>
	)
}

export default App
