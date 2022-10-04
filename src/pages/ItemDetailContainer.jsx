import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ItemDetail from '../components/ItemDetail'
import { itemCollection } from '../services/productos'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    // Esta funcion getById es la funcion que ejecuta logica de firebase
    itemCollection.getById(id).then(setProduct)
  }, [id])

  return (
    <>
      <Breadcrumb
        links={[
          { path: '/', text: 'Home' },
          { path: '/tienda', text: 'Tienda' },
        ]}
      />
      <ItemDetail product={{ id, ...product }} />
    </>
  )
}

export default ItemDetailContainer
