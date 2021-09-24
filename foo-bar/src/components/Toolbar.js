import "./Toolbar.scss";
import AppContext from "./AppContext";
import variables from "./styles/color-variables.scss";
import { useContext, useRef, useEffect } from "react";

const Toolbar = (props) => {
  console.log(variables);
  const toolbarRef = useRef();
  const appCtx = useContext(AppContext);
  //toolbarRef.current.style.setProperty("--backcolor", "red");
  //TypeError: Cannot read properties of undefined (reading 'style')
  const colorClassName = "someborder backcolor-red";
  useEffect(() => {
    toolbarRef.current.style.setProperty("--backcolor", variables.lightred);
  }, []);
  return (
    <div className={colorClassName} ref={toolbarRef}>
      {props.children}
    </div>
  );
};
export default Toolbar;
