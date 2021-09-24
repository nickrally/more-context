import { useState } from "react";
import TextInput from "./components/TextInput";
import AppContext from "./components/AppContext";
import Toolbar from "./components/Toolbar";

function App() {
  const [foo, setFoo] = useState("foo");
  const [bar, setBar] = useState("bar");
  const [color, setColor] = useState("Red");
  const colorOptions = ["Red", "Blue", "Orange"];

  const settings = {
    foo,
    setFoo,
    bar,
    setBar,
    color,
    setColor,
    colorOptions,
  };
  return (
    <AppContext.Provider value={settings}>
      <Toolbar />
      <TextInput />
    </AppContext.Provider>
  );
}

export default App;
