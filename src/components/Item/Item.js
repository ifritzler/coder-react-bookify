import { Link } from "react-router-dom";
import "./Item.sass";

const Item = ({ data }) => {
  const { id, title, images, bestSeller, price } = data;

  return (
    <div className={`book-card ${bestSeller ? "bestseller" : ""}`}>
      <img src={`${window.location.origin}/${images.large}`} alt={title} />
      <Link to={`/detail/${id}`} className="book-card__link">
        Ver mas
      </Link>
      <div className="book-card__link price">$ {price}</div>
    </div>
  );
};
export default Item;
