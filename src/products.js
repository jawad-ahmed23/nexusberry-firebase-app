import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";

function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      });
    console.log(products);
    // db.collection("orders").add({
    //   date: new Date(),
    //   status: "in-process", // in-process success failure
    //   userId: "oLsqBw63QSXCaX30x0UV",

    //   paymnetMethod: "Jazz Cash",
    //   paymentStatus: "", //

    //   shipmentStatus: "", //

    //   products: [
    //     {
    //       productId: "L1gbtJdUB4lAqhI1nQTr",
    //       cartQty: 1,
    //     },
    //     {
    //       productId: "frFUXarI11nz8A3Osasq",
    //       cartQty: 2,
    //     },
    //   ],
    // });
  }, []);

  return !products.length ? (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col">
            <>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                  <a href="/#" className="btn btn-primary">
                    Add To Cart
                  </a>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
