import { useState } from "react";
import TextInput from "./components/TextInput";
import AppContext from "./components/AppContext";
import Dropdown from "./components/Dropdown";
import Toolbar from "./components/Toolbar";

function App() {
  const [foo, setFoo] = useState("foo");
  const [bar, setBar] = useState("bar");
  const [color, setColor] = useState("Red");
  const colors = ["Red", "Blue", "Orange"];
  const handleOptionChange = (e) => {
    setColor(e.target.value);
  };
  const settings = {
    foo,
    setFoo,
    bar,
    setBar,
    color,
  };
  return (
    <AppContext.Provider value={settings}>
      <Toolbar>
        <Dropdown onOptionChange={handleOptionChange} options={colors} />
      </Toolbar>
      <TextInput />
    </AppContext.Provider>
  );
}

export default App;
