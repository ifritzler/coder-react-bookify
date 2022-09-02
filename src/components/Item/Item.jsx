import styles from './styles.module.css'
import { CardButton } from '../CardButton'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const {
    id,
    images = {
      small: '',
      medium: '',
      large: '',
    },
    title = 'Empty title',
    tinyDescription = 'Empty description...',
    price = 0,
    stock = 0,
    bestSeller = false,
  } = props.data

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.book} ${bestSeller ? styles.best : ''}`}>
          <img src={`${window.origin}/${images.large}`} alt={title} />
          <div className={styles.info}>
            <div className={styles.infoHeader}>
              <span className={styles.stock}>{`${stock} unid. disponibles`}</span>
              <span className={styles.price}>${price}</span>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{tinyDescription}</p>
            <Link to={`/products/detail/${id}`} className={styles['view-more']}>
              <CardButton text='Ver más...' />
            </Link>

            {/* TODO Hacer que el boton agregue un solo item al carrito. Aun no funcional */}
            <div href={`/products/detail/${id}`} className={styles['view-more']}>
              <CardButton text='Añadir a la carrito' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
