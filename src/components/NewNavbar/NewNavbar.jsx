import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NewNavbar = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				{/* Logo */}
				<span className={styles.logo}>Bookify</span>

				{/* Toggle menu icon */}
				<span className={styles.menu} onClick={() => setIsActive(!isActive)}>
					<FontAwesomeIcon icon={faBars} />
				</span>

				{/* Links */}
				<nav>
					<ul className={`${styles.links} ${isActive ? styles.active : ''}`}>
						<li>
							<a
								href='#'
								className={styles.link}
								onClick={() => {
									setIsActive(false)
								}}
							>
								BestSellers
							</a>
						</li>
						<li>
							<a
								href='#'
								className={styles.link}
								onClick={() => {
									setIsActive(false)
								}}
							>
								Novelas
							</a>
						</li>
						<li>
							<a
								href='#'
								className={styles.link}
								onClick={() => {
									setIsActive(false)
								}}
							>
								Fantasia
							</a>
						</li>
						<li>
							<a
								href='#'
								className={styles.link}
								onClick={() => {
									setIsActive(false)
								}}
							>
								Ciencia ficcion
							</a>
						</li>
						<li>
							<a
								href='#'
								className={styles.link}
								onClick={() => {
									setIsActive(false)
								}}
							>
								Manga
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
export default NewNavbar
