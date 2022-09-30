import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'
import { getById } from '../services/productos'

const ProductView = () => {
  const { idProducto } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getById(idProducto).then(setProduct)
  }, [idProducto])

  return (
    <>
      <Breadcrumb
        links={[
          { path: '/', text: 'Home' },
          { path: '/tienda', text: 'Tienda' },
        ]}
      />
      <Product product={product} />
    </>
  )
}

export default ProductView
