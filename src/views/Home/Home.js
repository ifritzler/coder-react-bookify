// import { getImageUrlFromPath } from "../firebase";
import HeroHeader from "./HeroHeader";
import HomeInfo from "./HomeInfo";

import "./Home.sass";

const Home = () => {
  // Get image url example from firebase bucket
  // getImageUrlFromPath(
  //   "books/large/harry-potter-y-la-piedra-filosofal.jpg"
  // ).then(console.log);

  return (
    <section id="home">
      <HeroHeader />
      <HomeInfo
        ltr={false}
        title="En constante crecimiento"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
          </svg>
        }
        text={
          "Tenemos la mas amplia variedad de titulos que vas a poder encontrar. Todos los dias encontraras las ultimas novedades de nuestras editoriales asociadas, con el objetivo de llevar a tu hogar las mejores historias jamas contadas."
        }
      />
      <HomeInfo
        ltr={true}
        title="Los mejores precios para tu bolsillo"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
          </svg>
        }
        text={
          "Nos ocupamos de que cada experiencia sea unica. Para que eso suceda, logramos nuestro mejor esfuerzo y relacion con las editoriales para acercarte los mejores precios. Descubre tus ieguiente historia con nosotros."
        }
      />
    </section>
  );
};
export default Home;
