import { useState } from 'react'
import styles from './style.module.css'

const ItemCount = ({ stock, initial, onAdd, addFail }) => {
  const [count, setCount] = useState(initial ?? 1)

  const plus = () => {
    if (count === stock) return
    setCount(count + 1)
  }

  const minus = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  const addToCard = () => {
    if (count > stock) return
    onAdd(count)
    setCount(initial)
  }

  return (
    <div className={styles.card}>
      <div className={styles.controls}>
        <span className={`${styles.action} ${count === 1 ? styles.disabled : ''}`} onClick={minus}>
          -
        </span>
        <span>{count}</span>
        <span
          className={`${styles.action} ${count === stock ? styles.disabled : ''}`}
          onClick={plus}
        >
          +
        </span>
      </div>
      <div className={styles['add-to-cart-btn']} onClick={addToCard}>
        Agregar al carrito
      </div>
    </div>
  )
}

export default ItemCount
