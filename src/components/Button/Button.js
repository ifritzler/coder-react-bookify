import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ href, text, className }) => {
  return (
    <Link to={href} className="button-primary">
      {text}
    </Link>
  );
};
export default Button;
