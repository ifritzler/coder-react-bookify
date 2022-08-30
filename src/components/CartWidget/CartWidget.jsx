import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
    </div>
  )
}

export default CartWidget
