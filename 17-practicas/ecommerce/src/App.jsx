import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App;
