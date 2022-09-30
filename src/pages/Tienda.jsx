import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ProductListContainer from '../components/ProductListContainer'
import { getAll, getByCategory } from '../services/productos'

const Tienda = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  function handleSetProducts() {
    if (!category) {
      return getAll().then(setProducts)
    }
    getByCategory(category).then(setProducts)
  }

  useEffect(() => {
    handleSetProducts()
  }, [category])

  return (
    <>
      <Breadcrumb
        links={[
          { path: '/', text: 'Home' },
          { path: '/tienda', text: 'Tienda' },
        ]}
      />
      <ProductListContainer products={products} />
    </>
  )
}

export default Tienda
