import { ItemCount } from '../ItemCount'
import styles from './style.module.css'

const ItemListContainer = () => {
	//	TODO Logica para hacer fetch a los productos
	// TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando.
	const onAdd = (count) => {
		alert(`Se agregaron ${count} productos al carrito`)
	}
	const addFail = () => {
		alert('Fallo la carga del producto en el carrito')
	}
	return (
		<div className={styles['item-list']}>
			<div className={styles.items}>
				<ItemCount stock={5} initial={1} onAdd={onAdd} addFail={addFail} />
				<ItemCount stock={15} initial={1} onAdd={onAdd} addFail={addFail} />
				<ItemCount stock={3} initial={1} onAdd={onAdd} addFail={addFail} />
			</div>
		</div>
	)
}

export default ItemListContainer
