// import { getImageUrlFromPath } from "../firebase";
import Button from "../../components/Button/Button";
import "./HeroHeader.sass";
const HeroHeader = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__cta">
          <h2 className="hero__cta-title">Las mejores historias te aguardan</h2>
          <Button href="/tienda" text="Explora nuestra tienda" />
        </div>
        <div className="hero__books">
          <div className="hero__books-item">
            <img
              className="hero__books-img"
              src="books/medium/bajo-la-misma-estrella.jpg"
              alt=""
            />
          </div>
          <div className="hero__books-item">
            <img
              className="hero__books-img"
              src="books/medium/cementerio-de-animales-stephen-king.jpg"
              alt=""
            />
          </div>
          <div className="hero__books-item">
            <img
              className="hero__books-img"
              src="books/medium/harry-potter-y-la-piedra-filosofal.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroHeader;
