import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { fetchProduct } from "../Redux/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

function Home() {
  const { loading, products, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="row m-5 p-5">
          {products.length > 0 ? (
            products.map((pro) => (
              <div className="col-lg-3 mb-4" key={pro.id}>
                <Card className="mt-2" style={{ width: "18rem", borderRadius: "10px", textAlign: "center", }}   >
                  <Card.Img variant="top" src={pro.thumbnail} style={{ height: "220px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{pro.title.slice(0, 15)}...</Card.Title>
                    <Link to={'/view/${pro.id}'}>View More</Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center my-5 text-danger">
              {error ? error : "No Products Found"}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;