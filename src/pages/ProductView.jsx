import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'

const ProductView = () => {
  const { idProducto } = useParams()
  const [product, setProduct] = useState({})

  const mockProduct = {
    id: '035b6a56-06b6-4149-8452-cedcf14060d0',
    tinyDescription:
      '«Los lugares más oscuros del infierno están reservados para aquellos que mantienen su neutralidad en épocas de crisis moral.»',
    bestSeller: true,
    description:
      '«Los lugares más oscuros del infierno están reservados para aquellos que mantienen su neutralidad en épocas de crisis moral.» El profesor de simbología Robert Langdon se despierta en un hospital en mitad de la noche, desorientado y con una herida en la cabeza. No recuerda nada de las últimas treinta y seis horas. Ni cómo ha llegado hasta allí, ni el origen del macabro objeto que los médicos descubren entre sus pertenencias. El mundo de Langdon pronto se convierte en un caos y se ve obligado a huir por las calles de Florencia junto a una inteligente joven, Sienna Brooks, cuyas hábiles maniobras le salvan la vida. Langdon no tarda en darse cuenta de que se encuentra en posesión de una serie de inquietantes códigos creados por un brillante científico; un genio cuya obsesión con el fin del mundo sólo es equiparable a la pasión que siente por una de las obras maestras más influyentes jamás escritas:Inferno, el oscuro poema épico de Dante Alighieri. En su huida a través de escenarios tan conocidos como el Palazzo Vecchio, los jardines Boboli o el Duomo, Langdon y Brooks descubren una red de pasadizos ocultos y secretos antiguos, así como un nuevo y terrorífico paradigma científico que podría ser utilizado para mejorar la vida en la Tierra... o para destruirla. Apasionante y con...',
    sold: 0,
    title: 'Inferno',
    stock: 1500,
    price: 2999,
    category: 'aventura',
    images: {
      small: '/books/small/inferno.jpg',
      large: '/books/large/inferno.jpg',
      medium: '/books/medium/inferno.jpg',
    },
    publisher: 'Example publisher',
    author: 'Example Author',
  }

  async function mockGetProduct(id) {
    return new Promise((res, rej) => {
      setTimeout(() => res(mockProduct), 400)
    })
  }

  useEffect(() => {
    mockGetProduct().then(setProduct)
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
