import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ItemDetail from '../components/ItemDetail'
import Spinner from '../components/Spinner'
import { Container } from '../components/styled-components/Containers'
import { itemCollection } from '../services/productos'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Esta funcion getById es la funcion que ejecuta logica de firebase
    itemCollection.getById(id).then((data) => {
      setLoading(false)
      setProduct(data)
    })
  }, [id])

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
        <ItemDetail product={{ id, ...product }} />
      )}
    </>
  )
}

export default ItemDetailContainer
