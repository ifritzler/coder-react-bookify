import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/products'
import Dropdown from '../Dropdown/Dropdown'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.sass'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [state, setState] = useState({
    loading: true,
    products: [],
    category: '',
    categories: [],
  })

  const setProperCategory = (category) => {
    setState({ ...state, category: category.toLowerCase() })
  }

  useEffect(() => {
    let data
    if (!categoryId) {
      getProducts().then((products) => {
        console.log(products)
        setState({ ...state, products: [...products], loading: false })
      })
    }
  }, [])

  return (
    <>
      <div className='filters'>
        {/* Este dropdown debe traer las categorias desde el fetch */}
        <Dropdown
          initialValue={categoryId || 'Categoria'}
          values={['Ninguna', ...state.categories]}
          set={setProperCategory}
        />
      </div>
      <div className='items'>
        {!state.loading && state.products.length > 0 ? (
          <ItemList products={state.products} />
        ) : (
          <div>Aun no hay productos para esta categoria</div>
        )}
      </div>
    </>
  )
}
export default ItemListContainer
