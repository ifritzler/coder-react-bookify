import { useState } from 'react'
import styles from './style.module.css'

const ItemCounter = ({ title, initialStock }) => {
	const [count, setCount] = useState(1)
	const [stock] = useState(initialStock || 3)

	const onAdd = () => {
		if (count === stock) return
		setCount(count + 1)
	}

	const onDecrement = () => {
		if (count === 1) return
		setCount(count - 1)
	}

	return (
		<div className={styles.card}>
			<p>{title || 'Example'}</p>
			<div className={styles.controls}>
				<span
					className={`${styles.action} ${count === 1 ? styles.disabled : ''}`}
					onClick={onDecrement}
				>
					-
				</span>
				<span>{count}</span>
				<span
					className={`${styles.action} ${count === stock ? styles.disabled : ''}`}
					onClick={onAdd}
				>
					+
				</span>
			</div>
		</div>
	)
}

export default ItemCounter
