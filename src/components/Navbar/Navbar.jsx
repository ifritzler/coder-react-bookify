import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import { useState } from 'react'

const Navbar = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<nav className={styles.nav}>
			<ul>
				<li className={styles.logo}>Bookify</li>
				<li className={styles['search-icon']}>
					<input type='search' placeholder='Search' />
					<div className={styles.icon}>
						<FontAwesomeIcon icon={faSearch} />
					</div>
				</li>
				<div className={styles['menu-bars']} onClick={() => setIsActive(!isActive)}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className={`${styles.links} ${isActive ? styles['menu--open'] : ''}`}>
					<li>
						<a href='#' onClick={() => setIsActive(false)}>
							Explorar
						</a>
					</li>
					<li>
						<a href='#' onClick={() => setIsActive(false)}>
							Best Sellers
						</a>
					</li>
					<li>
						<a href='#' onClick={() => setIsActive(false)}>
							Novelas
						</a>
					</li>
					<li>
						<a href='#' onClick={() => setIsActive(false)}>
							Manga
						</a>
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar
