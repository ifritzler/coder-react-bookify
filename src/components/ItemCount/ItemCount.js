import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.sass'

const ItemCount = ({ onAdd, product, initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = () => {
    if (counter === product?.stock) return
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter === 0) return
    setCounter(counter - 1)
  }

  return (
    <div className='counter-container'>
      <div className='counter'>
        <div className='counter-value'>
          <p>
            Seleccionadas {counter} <span>{`(En existencias ${product?.stock})`}</span>
          </p>
        </div>
        <div className='control' onClick={decrement}>
          -
        </div>
        <div className='control' onClick={increment}>
          +
        </div>
      </div>
      <div className='buttons-group'>
        <div
          className={`button ${counter === 0 ? 'deactivate' : ''}`}
          onClick={() => {
            if (counter === 0) return
            onAdd(counter)
            setCounter(initialValue)
          }}
        >
          Agregar al carrito
        </div>
        <Link to={'/cart'} className='button'>
          Finalizar Compra
        </Link>
      </div>
    </div>
  )
}
export default ItemCount
