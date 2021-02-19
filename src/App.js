import { Route } from "react-router-dom";
import Products from "./products";
import Product from "./product";

function App() {
  return (
    <>
      <Route path="/" exact component={Products} />
      <Route path="/product/:productId" component={Product} />
    </>
  );
}

export default App;
