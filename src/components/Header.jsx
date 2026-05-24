import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { FcLike } from "react-icons/fc"
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { searchProduct } from '../Redux/Slices/productSlice';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container className="d-flex align-items-center justify-content-between">

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="/v1057-element-30-removebg-preview.png" alt="Fashion Store Logo" width="45" height="45"
            style={{ objectFit: 'contain', marginRight: '10px', filter: 'grayscale(100%) brightness(0)' }} />
          <span style={{ fontFamily: "Playfair Display, serif", fontSize: "18px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase", color: "#d4af37" }}>FASHION STORE
          </span>
        </Navbar.Brand>

        {/*  SEARCH */}
        <input type="text" placeholder="Search by product name" className="form-control w-50" style={{ borderRadius: '10px' }} onChange={(e) => dispatch(searchProduct(e.target.value))} />

        <div className="d-flex align-items-center" style={{ gap: "20px" }}>

          <Link to="/wishlist">

            <FcLike size={24} style={{ cursor: "pointer" }} />
            <Badge bg="secondary">{wishlist?.length
          }</Badge> 
            

          </Link>

          <Link to="/cart">
            <FaCartShopping size={24} style={{ cursor: "pointer" }} />
            <Badge bg="secondary">0</Badge>
          </Link>

        </div>

      </Container>
    </Navbar>
  )
}

export default Header