import { useState } from "react";
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
    </>
  );
}

export default App;
