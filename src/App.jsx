import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to={"paginated"}>
        <button>paginated</button>
      </Link>
      <br />
      <Link to={"parallel"}>
        <button>parallel</button>
      </Link>
      <br />
      <Link to={"optimistic"}>
        <button>optimistic</button>
      </Link>
      <br />
      <Link to={"dependant"}>
        <button>dependant</button>
      </Link>
    </>
  );
}

export default App;
