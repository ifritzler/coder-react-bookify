import { Link } from 'react-router-dom'
import styles from './Avatar.module.css'

const Avatar = ({ picture }) => {
  return (
    <Link to='/private' className={styles.avatar}>
      <img
        className='rounded-full border-2 border-white'
        src={picture}
        alt=''
        referrerPolicy='no-referrer'
      />
    </Link>
  )
}
export default Avatar
