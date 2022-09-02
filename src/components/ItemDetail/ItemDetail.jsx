import { ItemCount } from '../ItemCount'
import styles from './styles.module.css'

const ItemDetail = ({ book }) => {
  const { images, title, author, tinyDescription, id, stock, description } = book
  return (
    <div className={styles.container}>
      <div className={styles['hero-header']}>
        <img src={`${window.origin}/${images.large}`} alt='' />
      </div>
      <div id={styles['book-portrait']}>
        <div className={styles.card}>
          <img src={`${window.origin}/${images.large}`} alt='' />
        </div>
      </div>

      <div id={styles['heading-info']}>
        <h1>{title}</h1>
        <span className={styles.author}>de {author}</span>
        <p className={styles['tiny-description']}>{tinyDescription}</p>
      </div>
      <div id={styles['buy-section']}>
        <h2>Comprar</h2>
        <ItemCount stock={stock} id={id} />
      </div>
      <div id={styles['book-resume']}>
        <h2>Resumen</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div id={styles['more-section']}>
        <h2>Contenido relacionado</h2>
      </div>
    </div>
  )
}

export default ItemDetail
