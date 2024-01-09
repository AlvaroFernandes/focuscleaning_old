import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../../assets/images/logos/logo.png";
import { Facebook, Instagram } from "react-bootstrap-icons";
import "../../../assets/scss/header.scss";

const Header = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="shadow bg-body-header"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Focus Cleaning"
            style={{ width: "8rem", height: "100%", objectFit: "cover" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className="toogle" />
        <Navbar.Collapse id="navbar" className="">
          <Nav className="m-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/services/basic">Basic</NavDropdown.Item>
              <NavDropdown.Item href="/services/commercial">
                Commercial
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/construction">
                Construction
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/endoflease">
                End of Lease
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/premium">
                Premium
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/spring">
                Spring Cleaning
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/facebook">
              <Facebook size={25} />
            </Nav.Link>
            <Nav.Link href="/facebook">
              <Instagram size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
