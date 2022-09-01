import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Loader } from '../Loader'
import styles from './style.module.css'

const ItemListContainer = () => {
  // TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando.
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const API_KEY = `$2b$10$${import.meta.env.VITE_API_KEY}`

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.jsonbin.io/v3/b/630e6d17a1610e638615ea97', {
          headers: {
            'X-Master-Key': API_KEY,
          },
        })
        const data = await response.json()

        // Aqui se resuelve el ejercicio de la promise con delay de 2 segundos
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data.record)
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
        {loading && <Loader></Loader>}
        <div className={styles.items}>
          <ItemList items={items} />
        </div>
      </div>
    </section>
  )
}

export default ItemListContainer
