import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { db } from "./firebase";
import "./App.css";

function App() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productRef = db.collection("products").doc(productId);

    productRef.get().then((doc) => setProduct({ id: doc.id, ...doc.data() }));
  }, [productId]);

  return !product ? (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <a href="/#" className="btn btn-primary">
          Add To Cart
        </a>
        <a href="/#" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
}

export default App;
