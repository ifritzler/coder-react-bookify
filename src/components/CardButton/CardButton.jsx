import styles from "./styles.module.css";

const CardButton = (props) => {
  const { text = "CardButton" } = props;
  return <span className={styles["card-button"]}>{text}</span>;
};

export default CardButton;
