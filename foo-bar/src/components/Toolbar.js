import "./Toolbar.scss";
import AppContext from "./AppContext";
import colors from "./styles/color-variables.module.scss";
import { useContext, useRef, useEffect } from "react";

const Toolbar = (props) => {
  const toolbarRef = useRef();
  const appCtx = useContext(AppContext);
  //toolbarRef.current.style.setProperty("--backcolor", "red");
  //TypeError: Cannot read properties of undefined (reading 'style')
  //setProperty in useEffect, after component is rendered
  const colorClassName = "someborder backcolor-red";
  useEffect(() => {
    toolbarRef.current.style.setProperty(
      "--backcolor",
      colors["light" + appCtx.color.toLowerCase()]
    );
  }, [appCtx.color]);
  return (
    <div className={colorClassName} ref={toolbarRef}>
      {props.children}
    </div>
  );
};
export default Toolbar;
