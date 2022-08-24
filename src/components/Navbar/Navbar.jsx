import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li className={styles.logo}>Bookify</li>
				<div className={styles.links}>
					<li>
						<a href='#'>Explorar</a>
					</li>
					<li>
						<a href='#'>Best Sellers</a>
					</li>
					<li>
						<a href='#'>Novelas</a>
					</li>
					<li>
						<a href='#'>Manga</a>
					</li>
				</div>
				<li className={styles['search-icon']}>
					<input type='search' placeholder='Search' />
					<div className={styles.icon}>
						<FontAwesomeIcon icon={faSearch} />
					</div>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
