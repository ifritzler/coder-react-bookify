import { useEffect, useState } from 'react'
import { Item } from '../Item'
import styles from './style.module.css'

const ItemListContainer = () => {
  //	TODO Logica para hacer fetch a los productos
  // TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando.
  const [items, setItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('src/data/books.json')
        const data = await response.json()
        setItems(data)
      } catch {}
    }
    getData()
  }, [])

  return (
    <section className={styles['item-list']}>
      <div className={styles.container}>
        <div className={styles.items}>
          {items.map((item) => {
            return <Item key={item.id} data={item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ItemListContainer
