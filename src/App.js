import Content from "./Content";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Content />}
    </div>
  );
}

export default App;
