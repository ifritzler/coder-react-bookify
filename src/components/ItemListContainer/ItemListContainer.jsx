// import { ItemCounter } from '../ItemCounter'
import styles from './style.module.css'

const ItemListContainer = ({ greeting }) => {
	return (
		<div className={styles['item-list']}>
			<p>{`Hola ${greeting || 'Usuario'}!`}</p>
			<div className={styles.items}>
				{/* <ItemCounter productName={'Book 1'} />
				<ItemCounter productName={'Book 2'} />
				<ItemCounter productName={'Book 3'} /> */}
			</div>
		</div>
	)
}

export default ItemListContainer
