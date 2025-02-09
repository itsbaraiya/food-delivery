import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo/logo.png';
import { CartContext } from '../../context/CartContext';

function Header() {
  const [nav, setNav] = useState(false);
  const { cartItems } = useContext(CartContext);

  const changeNavOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      setNav(scrollValue > 100);
  };

  window.addEventListener("scroll", changeNavOnScroll);

  // ✅ Calculate total number of items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>         
     <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className='logo'>          
            <img src={Logo} alt="logo" className='img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>            
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div className="cart">
                <i className="bi bi-bag fs-5"></i>
                {cartCount > 0 && <em className='roundpoint'>{cartCount}</em>} {/* ✅ Dynamic count */}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>     
    </header>
  )
}

export default Header;
