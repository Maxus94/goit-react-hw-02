import { useState } from "react";
import "./App.css";
import Description from "./Components/Description/Description";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Description
        title="Sip Happens Café"
        information="Please leave your feedback about our service by selecting one of the options below."
      />
    </div>
  );
}

export default App;
