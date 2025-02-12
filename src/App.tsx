import { useState } from "react";
import "./App.css";
import LogoHeader from "./components/LogoHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LogoHeader />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
