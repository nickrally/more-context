import { useState } from "react";
import TextInput from "./components/TextInput";
import AppContext from "./components/AppContext";

function App() {
  const [foo, setFoo] = useState("foo");
  const [bar, setBar] = useState("bar");
  const settings = {
    foo,
    setFoo,
    bar,
    setBar,
  };
  return (
    <AppContext.Provider value={settings}>
      <TextInput />
    </AppContext.Provider>
  );
}

export default App;
