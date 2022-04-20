import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1>
          {" "}
          <Link to="/" style={{textDecoration:"none" ,color:"white"}}>HOME</Link>
        </h1>
        <Nav>
          <Link to="/auth/sign-in"  style={{textDecoration:"none" ,color:"white"}}>SignIN</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
