import { useContext } from "react";
import AppContext from "./AppContext";
import "./TextInput.scss";

const TextInput = () => {
  const appCtx = useContext(AppContext);
  const classNameWithColor = "header " + appCtx.color.toLowerCase();
  return (
    <>
      <h3 className={classNameWithColor}>{appCtx.foo}</h3>
      <label htmlFor="foo">foo:</label>
      <input type="text" onChange={(e) => appCtx.setFoo(e.target.value)} />
      <h3 className={classNameWithColor}>{appCtx.bar}</h3>
      <label htmlFor="bar">bar:</label>
      <input type="text" onChange={(e) => appCtx.setBar(e.target.value)} />
    </>
  );
};

export default TextInput;
