import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../../services/products";
import Dropdown from "../Dropdown/Dropdown";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.sass";

const ItemListContainer = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getCategories().then(setCategories);
    if (
      !categoryId ||
      categoryId.toLowerCase() === "categoria" ||
      categoryId.toLowerCase() === "ninguna"
    ) {
      getProducts().then(setProducts);
    }
    if (categoryId) {
      setProperCategory(categoryId);
      getProductsByCategory(category).then(setProducts);
    }
  }, [category, categoryId]);

  const setProperCategory = (category) => {
    setCategory(category.toLowerCase());
  };

  return (
    <>
      <div className="filters">
        {/* Este dropdown debe traer las categorias desde el fetch */}
        <Dropdown
          initialValue={categoryId || "Categoria"}
          values={["Ninguna", ...categories]}
          set={setProperCategory}
        />
      </div>
      <div className="items">
        {products ? (
          <ItemList products={products} />
        ) : (
          <div>Aun no hay productos para esta categoria</div>
        )}
      </div>
    </>
  );
};
export default ItemListContainer;
