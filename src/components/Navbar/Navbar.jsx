import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link className={styles.logo} to='/'>
          Bookify
        </Link>

        {/* Toggle menu icon */}
        <span className={styles.menu} onClick={() => setIsActive(!isActive)}>
          <FontAwesomeIcon icon={faBars} />
        </span>

        {/* Links */}
        <nav>
          <ul className={`${styles.links} ${isActive ? styles.active : ''}`}>
            <li>
              <Link
                to='/products'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                Explorar
              </Link>
            </li>
            <li>
              <Link
                to='/products?bestseller=true'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                BestSellers
              </Link>
            </li>
            <li>
              <Link
                to='/products/category/novela'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                Novelas
              </Link>
            </li>
            <li>
              <Link
                to='/products/category/fantasia'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                Fantasia
              </Link>
            </li>
            <li>
              <Link
                to='/products/category/ciencia-ficcion'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                Ciencia ficcion
              </Link>
            </li>
            <li>
              <Link
                to='/products/category/manga'
                className={styles.link}
                onClick={() => {
                  setIsActive(false)
                }}
              >
                Manga
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Navbar
