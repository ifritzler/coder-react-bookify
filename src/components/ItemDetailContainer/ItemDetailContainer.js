import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getProductById(id).then(setBook);
  }, [id]);

  return <ItemDetail book={book} />;
};
export default ItemDetailContainer;
