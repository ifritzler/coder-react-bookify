import { useState } from 'react'
import styles from './styles.module.css'

const ItemCount = (props) => {
  const { id, stock } = props

  const [items, setItems] = useState(1)

  const onAdd = () => {
    if (items === stock) return
    setItems(items + 1)
  }

  const onDecrement = () => {
    if (items === 1) return
    setItems(items - 1)
  }

  return (
    <>
      <div className={styles['item-count-container']}>
        <span>Cantidad: {items}</span>
        <span className={styles.whispered}>{`(En existencias: ${stock})`}</span>
        <div className={styles.controls}>
          <div className={styles.control} onClick={onDecrement}>
            -
          </div>
          <div className={styles.control} onClick={onAdd}>
            +
          </div>
        </div>
      </div>
      <div
        className={styles['add-cart']}
        onClick={() => alert(`Producto con id ${id} agregado con exito`)}
      >
        Agregar al carrito
      </div>
    </>
  )
}

export default ItemCount
