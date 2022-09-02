import { useState, useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { ItemListContainer } from '../../components/ItemListContainer'
import { Loader } from '../../components/Loader'
import { API_KEY } from '../../constants'
import { calculateTime } from '../../utilities'

// Componente que se encarga de hacer fetch a los productos y controlar
// la cantidad de peticiones a la api segun la cantidad de tiempo que paso desde que se le hizo el fetch
const Products = () => {
  const { id } = useParams()
  const [data, setData] = useState({
    items: [],
    lastFetch: null,
  })
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    // Si no pasaron mas de 2 minutos desde que se hizo el ultimo fetch devuelve los ultimos
    // datos cacheados en el componente
    const minutsFromLastFetch = calculateTime(data.lastFetch)
    if (minutsFromLastFetch && minutsFromLastFetch < 2) return data

    // Comienza la carga del componente
    setLoading(true)
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/630e6d17a1610e638615ea97`, {
        headers: {
          'X-Master-Key': API_KEY,
        },
      })
      const data = await response.json()
      return { items: data.record, lastFetch: Date.now() }
    } catch {}
  }

  useEffect(() => {
    getData().then((data) => {
      setLoading(false)
      console.log('re-render')
      setData(data)
    })
  }, [id])

  return (
    <>
      {loading && <Loader></Loader>}
      {!loading && (
        <ItemListContainer category={id} bestseller={searchParams.get('bestseller')} data={data} />
      )}
    </>
  )
}
export default Products
