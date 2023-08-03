import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          { /*icon*/}
          <i class="fa-solid fa-utensils fa-beat-fade fa-lg me-3"></i>           Restaurant Hub
          </Navbar.Brand>
        </Container>
      </Navbar>  )
}

export default Header