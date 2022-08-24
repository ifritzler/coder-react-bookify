import styles from './style.module.css'

const ItemListContainer = ({ greeting }) => {
	return (
		<div className={styles['item-list']}>
			<p>{`Hola ${greeting || 'Usuario'}!`}</p>
		</div>
	)
}

export default ItemListContainer
