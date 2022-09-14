import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ values, initialValue, set = null }) => {
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className={`select ${!open ? "closed" : ""}`}>
      <div className="selected" onClick={() => setOpen(!open)}>
        {value}
      </div>
      <div className={`optionContainer ${!open ? "closed" : ""}`}>
        {values.map((category, index) => (
          <Link
            to={`/tienda/${category}`}
            key={index}
            className="option"
            onClick={(e) => {
              setValue(e.target.innerText);
              if (set) set(e.target.innerText);
              setOpen(false);
            }}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
