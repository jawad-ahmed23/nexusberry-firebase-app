import { Route } from "react-router-dom";
import Collection from "./collection";
import Product from "./product";

function App() {
  return (
    <>
      <Route path="/" exact component={Collection} />
      <Route path="/product/:productId" component={Product} />
    </>
  );
}

export default App;
