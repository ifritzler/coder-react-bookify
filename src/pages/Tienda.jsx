import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ProductListContainer from '../components/ProductListContainer'
import { getAll, getByCategory } from '../services/productos'

const mockProducts = [
  {
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
      small: 'books/small/inferno.jpg',
      large: 'books/large/inferno.jpg',
      medium: 'books/medium/inferno.jpg',
    },
    publisher: 'Example publisher',
    author: 'Example Author',
  },
  {
    id: '0b19d4c5-ec24-4594-bbd2-4f08c327ec8b',
    title: 'Harry Potter y la piedra filosofal',
    publisher: 'Example publisher',
    bestSeller: true,
    stock: 1500,
    description:
      'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería.',
    images: {
      medium: 'books/medium/harry-potter-y-la-piedra-filosofal.jpg',
      large: 'books/large/harry-potter-y-la-piedra-filosofal.jpg',
      small: 'books/small/harry-potter-y-la-piedra-filosofal.jpg',
    },
    price: 2999,
    author: 'Example Author',
    category: 'fantasia',
    tinyDescription:
      'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley.',
    sold: 0,
  },
  {
    id: '0ce53bf6-873d-4db2-bad1-2e6993d95dde',
    tinyDescription:
      'Escribo estas palabras en la esperanza y el convencimiento de que algún día descubrirás este lugar…un lugar que cambió mi vida como estoy seguro de que cambiará la tuya.',
    stock: 1500,
    price: 3199,
    images: {
      medium: 'books/medium/el-prisionero-del-cielo-carlos-zafon.jpg',
      large: 'books/large/el-prisionero-del-cielo-carlos-zafon.jpg',
      small: 'books/small/el-prisionero-del-cielo-carlos-zafon.jpg',
    },
    bestSeller: false,
    author: 'Example Author',
    title: 'El prisionero del cielo',
    description:
      'Escribo estas palabras en la esperanza y el convencimiento de que algún día descubrirás este lugar…un lugar que cambió mi vida como estoy seguro de que cambiará la tuya. Barcelona, 1957. Daniel Sempere y su amigo Fermín, los héroes deLa Sombra del Viento, regresan de nuevo a la aventura para afrontar el mayor desafío de sus vidas. Justo cuando todo empezaba a sonreírles, un inquietante personaje visita la librería de Sempere y amenaza con desvelar un terrible secreto que lleva enterrado dos décadas en la oscura memoria de la ciudad. Al conocer la verdad, Daniel comprenderá que su destino le arrastra inexorablemente a enfrentarse con la mayor de las sombras: la que está creciendo en su interior. Rebosante de intriga y emoción,El Prisionero del Cielo es una novela magistral donde los hilos de La Sombra del Viento yEl Juego del Ángel convergen a través del embrujo de la literatura y nos conduce hacia el enigma que se oculta en el corazón del Cementerio de los Libros Olvidados.',
    sold: 0,
    category: 'novela',
    publisher: 'Example publisher',
  },
  {
    id: '1aabe35f-0ce7-402f-b3a1-deb9396fb850',
    price: 3449,
    title: 'Patria',
    stock: 1500,
    sold: 0,
    author: 'Example Author',
    bestSeller: false,
    images: {
      small: 'books/small/patria-aramburu.jpg',
      large: 'books/large/patria-aramburu.jpg',
      medium: 'books/medium/patria-aramburu.jpg',
    },
    description:
      'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y despues del atentado que trastocó su vida y la de su familia? ¿Podrá saber quien fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Que pasó entre esas dos mujeres? ¿Que ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y despues del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.',
    category: 'ficcion historica',
    publisher: 'Example publisher',
    tinyDescription:
      'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron.',
  },
  {
    id: '3d105cff-7d6f-4ba5-960a-a4270473aefe',
    description:
      'Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas…y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece? Tú no la conoces. Ella a ti, sí.',
    publisher: 'Example publisher',
    price: 3199,
    category: 'novela',
    title: 'La chica del tren',
    bestSeller: false,
    images: {
      large: 'books/large/la-chica-del-tren-paula-hawkins.jpg',
      medium: 'books/medium/la-chica-del-tren-paula-hawkins.jpg',
      small: 'books/small/la-chica-del-tren-paula-hawkins.jpg',
    },
    stock: 1500,
    tinyDescription: '¿Estabas en el tren de las 8.04? ¿Viste algo sospechoso? Rachel, sí',
    author: 'Example Author',
    sold: 0,
  },
  {
    id: '3e6b507c-176d-4b9d-a7b6-7e8c7e8c8280',
    sold: 0,
    images: {
      large: 'books/large/bajo-la-misma-estrella.jpg',
      medium: 'books/medium/bajo-la-misma-estrella.jpg',
      small: 'books/small/bajo-la-misma-estrella.jpg',
    },
    stock: 1500,
    author: 'Example Author',
    category: 'novela',
    price: 2799,
    tinyDescription:
      'Hazel tiene dieciséis años, está enferma de cáncer desde pequeña y sobrevive gracias a un pequeño milagro médico...',
    publisher: 'Example publisher',
    title: 'Bajo la misma estrella',
    description:
      'Hazel tiene dieciséis años, está enferma de cáncer desde pequeña y sobrevive gracias a un pequeño milagro médico y a la bombona de oxígeno que la acompaña todo el tiempo. Un día, Hazel conoce a Gus, que ya ha superado la enfermedad.',
    bestSeller: true,
  },
  {
    id: '4241971d-c01d-4a3e-bc2d-157ae3ffe8b3',
    title: 'Divergente',
    publisher: 'Example publisher',
    price: 3199,
    tinyDescription:
      'Una elección que delimita quienes son tus amigos. Una elección que define tus creencias. Una elección que determina tus lealtades... para siempre. Una sola elección puede transformarte.',
    author: 'Example Author',
    stock: 1500,
    images: {
      small: 'books/small/divergente.jpg',
      medium: 'books/medium/divergente.jpg',
      large: 'books/large/divergente.jpg',
    },
    sold: 0,
    bestSeller: true,
    category: 'aventura',
    description:
      'En el Chicago distópico de Beatrice, la sociedad está dividida en cinco facciones. En una ceremonia anual, todos los chicos de dieciseis años deben decidir a que facción dedicarán el resto de sus vidas. Beatrice tiene que elegir entre quedarse con su familia... y ser quien realmente es. Así que toma una decisión que sorprenderá a todo el mundo, incluida ella...',
  },
  {
    id: '471745c8-07e0-4388-b71f-83a0102c7d00',
    price: 3449,
    sold: 0,
    title: 'Sinsajo',
    author: 'Example Author',
    publisher: 'Example publisher',
    bestSeller: true,
    description:
      'Katniss Everdeen ha sobrevivido dos veces a los Juegos del Hambre, pero no está a salvo. La revolución se extiende y, al parecer, todos han tenido algo que ver en el meticuloso plan, todos excepto Katniss.Aun así su papel en la batalla final es el más importante de todos. Katniss debe convertirse en el Sinsajo, en el símbolo de la rebelión... a cualquier precio.',
    category: 'aventura',
    tinyDescription:
      "El esperado desenlace de la espectacular historia de Katniss Everdeen en la increíble trilogía de 'Los Juegos del Hambre'.",
    images: {
      large: 'books/large/sinsajo-los-juegos-del-hambre.jpg',
      small: 'books/small/sinsajo-los-juegos-del-hambre.jpg',
      medium: 'books/medium/sinsajo-los-juegos-del-hambre.jpg',
    },
    stock: 1500,
  },
  {
    id: '4f90dbd8-99f0-4cdd-8694-4308edd177dc',
    description:
      'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y despues del atentado que trastocó su vida y la de su familia? ¿Podrá saber quien fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Que pasó entre esas dos mujeres? ¿Que ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y despues del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.',
    title: 'Patria',
    author: 'Example Author',
    sold: 0,
    category: 'ficcion historica',
    tinyDescription:
      'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron.',
    bestSeller: false,
    publisher: 'Example publisher',
    images: {
      medium: 'books/medium/patria-aramburu.jpg',
      large: 'books/large/patria-aramburu.jpg',
      small: 'books/small/patria-aramburu.jpg',
    },
    stock: 1500,
    price: 3449,
  },
  {
    id: '53e1d6f4-d459-4619-86d4-9bd0a57641d4',
    description:
      'Louisa Clark sabe muchas cosas. Sabe cuántos pasos hay entre la parada del autobús y su casa. Sabe que le gusta trabajar en el café Buttered Bun y sabe que quizá no quiera a su novio Patrick. Lo que Lou no sabe es que está a punto de perder su trabajo o que son sus pequeñas rutinas las que la mantienen en su sano juicio. Will Traynor sabe que un accidente de moto se llevó sus ganas de vivir. Sabe que ahora todo le parece insignificante y triste y sabe exactamente cómo va a solucionarlo. Lo que Will no sabe es que Lou está a punto de irrumpir en su mundo con una explosión de color. Y ninguno de los dos sabe que va a cambiar al otro para siempre. Yo antes de ti reúne a dos personas que no podrían tener menos en común en una novela conmovedoramente romántica con una pregunta: ¿Qué decidirías cuando hacer feliz a la persona a la que amas significa también destrozarte el corazón?',
    bestSeller: true,
    sold: 0,
    stock: 1500,
    tinyDescription:
      'Louisa Clark sabe muchas cosas. Sabe cuántos pasos hay entre la parada del autobús y su casa. Sabe que le gusta trabajar en el café Buttered Bun y sabe que quizá no quiera a su novio Patrick.',
    category: 'novela',
    author: 'Example Author',
    images: {
      large: 'books/large/yo-antes-de-ti-jojo-moyes.jpg',
      medium: 'books/medium/yo-antes-de-ti-jojo-moyes.jpg',
      small: 'books/small/yo-antes-de-ti-jojo-moyes.jpg',
    },
    publisher: 'Example publisher',
    title: 'Yo antes de ti',
    price: 3199,
  },
  {
    id: '7a85a861-d266-475e-839e-458b3d1035fa',
    bestSeller: true,
    category: 'terror',
    title: 'Cementerio de animales',
    publisher: 'Example publisher',
    author: 'Example Author',
    price: 3199,
    images: {
      large: 'books/large/cementerio-de-animales-stephen-king.jpg',
      medium: 'books/medium/cementerio-de-animales-stephen-king.jpg',
      small: 'books/small/cementerio-de-animales-stephen-king.jpg',
    },
    sold: 0,
    stock: 1500,
    description:
      'Louis lo había comprobado: el gato estaba muerto, y por eso lo había enterrado. Aun así, incomprensiblemente, el gato había vuelto a casa. Church estaba allí otra vez, como Louis Creed temía y deseaba. Porque su hijita Ellie le había encomendado que cuidara del gato, y Church había muerto atropellado. Louis lo había comprobado: el gato estaba muerto, incluso lo había enterrado más allá del cementerio de animales. Sin embargo, Chruch había regresado, y sus ojos eran más crueles y perversos que antes. Pero volvía a estar allí y Ellie no lo lamentaría. Louis Creed sí lo lamentaría. Porque más allá del cementerio de animales, más allá de la valla de troncos que nadie se atrevía a traspasar, más allá de los cuarenta y cinco escalones, el maligno poder del antiguo cementerio indio le reclamaba con macabra avidez...',
    tinyDescription:
      'Louis lo había comprobado: el gato estaba muerto, y por eso lo había enterrado. Aun así, incomprensiblemente, el gato había vuelto a casa.',
  },
]

const Tienda = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  function handleSetProducts() {
    if (!category) {
      return getAll().then(setProducts)
    }
    getByCategory(category)
  }

  useEffect(() => {
    // handleSetProducts() Descomentar para traer los datos de firebase
    setProducts(mockProducts)
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
