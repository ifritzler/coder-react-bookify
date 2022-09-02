import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../constants'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader'

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(true)

  const getBook = async () => {
    const response = await fetch(`https://api.jsonbin.io/v3/b/630e6d17a1610e638615ea97`, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    })
    const data = await response.json()
    return data.record
  }

  useEffect(() => {
    setLoading(true)
    getBook().then((data) => {
      const filtrado = data.filter((item) => item.id === Number(id))
      setBook(filtrado[0])
      setLoading(false)
    })
  }, [id])

  return (
    <>
      {loading && <Loader></Loader>}
      {!loading && <ItemDetail book={book} />}
    </>
  )
}
