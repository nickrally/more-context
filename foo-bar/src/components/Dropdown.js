import { useContext } from "react";
import AppContext from "./AppContext";

const Dropdown = () => {
  const appCtx = useContext(AppContext);
  const options = appCtx.colorOptions;
  const handleOptionChange = (e) => {
    appCtx.setColor(e.target.value);
  };
  return (
    <>
      <label htmlFor="dropdown1">Select:</label>
      <select id="dropdown1" onChange={handleOptionChange}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
