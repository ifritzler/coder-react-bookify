import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Header from './Header'
import './Explore.sass'
const Explore = () => {
  return (
    <>
      <Header />
      <div className='store-container'>
        <div className='container'>
          <ItemListContainer />
        </div>
      </div>
    </>
  )
}
export default Explore
