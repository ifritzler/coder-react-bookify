import styles from './styles.module.css'
const Loader = () => {
  return (
    <>
      <div className={styles.loading}>
        <div className={styles.book}>
          <div className={styles.inner}>
            <div className={styles.left}></div>
            <div className={styles.middle}></div>
            <div className={styles.right}></div>
          </div>

          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <br></br>
        <p>Cargando...</p>
      </div>
    </>
  )
}
export default Loader
