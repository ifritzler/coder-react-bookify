import { useEffect, useState } from 'react'
import { Item } from '../Item'
import styles from './style.module.css'

const ItemListContainer = () => {
  // TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando.
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await fetch('src/data/books.json')
        const data = await response.json()
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data)
          }, 2000)
        })
      } catch {}
    }
    getData().then((data) => {
      setLoading(false)
      setItems(data)
    })
  }, [])

  return (
    <section className={styles['item-list']}>
      <div className={styles.container}>
        {/* Renderizado condicional de un loading */}
        {loading && <p className={styles.loading}>Cargando</p>}
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
