import { FaShopify, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white pt-5 pb-3" style={{ backgroundColor: "#111" }}>
      <div className="container">
        <div className="row align-items-start gy-4">

          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <FaShopify size={40} style={{ color: "#dd4af3" }} />
              <h3 className="ms-3 mb-0" style={{ letterSpacing: "1px" }}>
                Fashion Store
              </h3>
            </div>

            <p style={{ color: "#cfcfcf", lineHeight: "1.8", maxWidth: "320px" }}>
              Discover trend-forward fashion, premium styles, and modern outfits designed to refine your look.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li><Link to="/shop" className="text-decoration-none text-light">Shop</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-lg-3 col-md-6">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-decoration-none text-light">FAQ</Link></li>
              <li><Link to="/shipping" className="text-decoration-none text-light">Shipping</Link></li>
              <li><Link to="/returns" className="text-decoration-none text-light">Returns</Link></li>
              <li><Link to="/privacy" className="text-decoration-none text-light">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <hr style={{ borderColor: "#444" }} />

        <div className="text-center" style={{ fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} Fashion Store. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;