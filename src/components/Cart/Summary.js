import { formatCurrency } from './cartUtil'

function Summary({ subTotal }) {
  const total = subTotal

  return (
    <section className='container'>
      <div className='summary'>
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>

          <li className='total'>
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className='checkout'>
        <button type='button'>Check Out</button>
      </div>
    </section>
  )
}

export default Summary
