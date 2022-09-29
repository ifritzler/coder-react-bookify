import CardProduct from './CardProduct'

const ProductListContainer = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </>
  )
}
export default ProductListContainer
