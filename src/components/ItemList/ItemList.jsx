import { Item } from '../Item'

const ItemList = ({ items }) => {
  return (
    <>
      {items ? (
        items.map((item) => {
          return <Item key={item.id} data={item} />
        })
      ) : (
        // Mensaje que se mostrara en caso de que falle el fetch por esta mal puesta la api_key
        <p>Error al cargar los datos. Falta la API_KEY en el enviroment</p>
      )}
    </>
  )
}
export default ItemList
