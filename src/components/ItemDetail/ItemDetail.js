import './ItemDetail.sass'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext'

const ItemDetail = ({ book }) => {
  const { addItem } = useCartContext()

  const onAdd = (quantity) => {
    addItem(book, quantity)
    alert(`${book.title} x${quantity} se ha agregado al carrito`)
  }

  return (
    <div className='detail-container'>
      <div className='detail-img'>
        <img
          src={window.location.origin + '/' + book.images?.large}
          alt={'Portada de ' + book?.title}
        />
      </div>
      <div className='detail-right'>
        <div className='detail-info'>
          <h1 className='detail-title'>{book?.title}</h1>
          <span className='detail-author'>{book?.author}</span>

          <ItemCount onAdd={onAdd} product={book} initialValue={0} />

          <h2 className='subtitle'>Resumen</h2>
          <div className='description-container'>
            <p className='detail-long-description'>{book?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail
