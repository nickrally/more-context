import { useContext } from "react";
import AppContext from "./AppContext";

const TextInput = () => {
  const appCtx = useContext(AppContext);
  return (
    <>
      <h3>{appCtx.foo}</h3>
      <label htmlFor="foo">foo:</label>
      <input type="text" onChange={(e) => appCtx.setFoo(e.target.value)} />
      <h3>{appCtx.bar}</h3>
      <label htmlFor="bar">foo:</label>
      <input type="text" onChange={(e) => appCtx.setBar(e.target.value)} />
    </>
  );
};

export default TextInput;
