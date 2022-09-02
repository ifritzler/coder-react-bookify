import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './style.module.css'

const ItemListContainer = ({ category, data, bestseller }) => {
  // TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando
  const [filtered, setFiltered] = useState(data.items)

  useEffect(() => {
    let filtrados = data.items
    if (bestseller) {
      console.log('entre a bestseller')
      console.log(filtrados)
      filtrados = filtrados.filter((product) => product.bestSeller === true)
    }
    if (category) {
      console.log('entre a category')
      filtrados = filtrados.filter((product) => product.category === category)
    }

    setFiltered(filtrados)
  }, [category, data, bestseller])

  return (
    <section className={styles['item-list']}>
      <div className={styles.container}>
        {/* Renderizado condicional de un loading */}
        <div className={styles.items}>
          <ItemList items={filtered} />
        </div>
      </div>
    </section>
  )
}

export default ItemListContainer
