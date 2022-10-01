import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ItemList from '../components/ItemList'
import { itemCollection } from '../services/productos'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  function handleSetProducts() {
    if (!categoryId) {
      return itemCollection.getAll().then(setProducts)
    }
    itemCollection.getByCategory(categoryId).then(setProducts)
  }

  useEffect(() => {
    handleSetProducts()
  }, [categoryId])

  return (
    <>
      <Breadcrumb
        links={[
          { path: '/', text: 'Home' },
          { path: '/tienda', text: 'ItemListContainer' },
        ]}
      />
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
