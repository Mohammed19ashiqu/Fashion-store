import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { addtowishlist } from "../Redux/Slices/wishlistSlice";
import { useEffect } from "react";





function View() {
  const { id } = useParams();
  console.log(id);
  const { products } = useSelector((state) => state.product);

  const singleProduct = products.find((item) => item.id === Number(id));

  if (!singleProduct) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  console.log( singleProduct);
  

  

  const handleaddtowishlist = () => {
    console.log("jjjjjjjjjjjjjjjjjj");
    
     const existingProduct = wishlist.find(pro=> pro.id === singleProduct.id);
      if(existingProduct){
        alert("Product already in wishlist");
      }
      else{
        dispatch(addtowishlist(singleProduct));
      }

    }
  return (
    <>
      <div className="row">
        <div className="col-lg-6 p-5" style={{ textAlign: "center" }}>
          <img src={singleProduct.thumbnail} alt={singleProduct.title}  width={"50%"}/>

        </div>

        <div className="col-lg-6 p-5">
          <h3>{singleProduct.title}</h3>
          <h4 style={{ color: "green" }}>${singleProduct.price}</h4>
          <p>{singleProduct.description}</p>

          <div className="d-flex justify-content-between">
            <button  onClick={handleaddtowishlist} style={{ background: "transparent", border: "none" }}>
              <FaHeartCirclePlus
                style={{ width: "20px", height: "20px", color: "red" }}
              />
            </button>

            <button style={{ background: "transparent", border: "none" }}>
              <FaCartPlus
                style={{ width: "20px", height: "20px", color: "green" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default View