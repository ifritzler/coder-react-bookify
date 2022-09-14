import Item from "../Item/Item";
const ItemList = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </>
  );
};
export default ItemList;
