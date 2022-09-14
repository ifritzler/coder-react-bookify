import "./HomeInfo.sass";

const HomeInfo = ({ ltr, title, text, icon }) => {
  return (
    <section className="home-info">
      <div className={`container ${ltr ? "ltr" : ""}`}>
        <div className="home-info__heading">
          <h2 className="home-info__title">{title}</h2>
          <span className="home-info__icon">
            <img src="blob.svg" alt="blob background" />
            {icon}
          </span>
        </div>
        <p className="home-info__text">{text}</p>
      </div>
    </section>
  );
};
export default HomeInfo;
