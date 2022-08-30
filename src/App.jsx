import { CartWidget } from './components/CartWidget'
import { ItemListContainer } from './components/ItemListContainer'
import { NewNavbar } from './components/NewNavbar'
function App() {
	return (
		<div className='App'>
			<NewNavbar />
			<main>
				<ItemListContainer />
				<CartWidget />
			</main>
		</div>
	)
}

export default App
