import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ItemList from '../components/ItemList'
import Spinner from '../components/Spinner'
import { Container } from '../components/styled-components/Containers'
import { itemCollection } from '../services/productos'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleGetProducts() {
    if (!categoryId) {
      const response = await itemCollection.getAll()
      return response
    }
    const items = await itemCollection.getByCategory(categoryId)
    return items
  }

  useEffect(() => {
    handleGetProducts().then((data) => {
      setLoading(false)
      setProducts(data)
    })
  }, [categoryId])

  return (
    <>
      <Breadcrumb
        links={[
          { path: '/', text: 'Home' },
          { path: '/tienda', text: 'Tienda' },
        ]}
      />

      {loading ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <ItemList products={products} />
      )}
    </>
  )
}

export default ItemListContainer
