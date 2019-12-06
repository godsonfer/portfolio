import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./Header.scss";

const HeaderComponent = () => (
  <div className="header">
    <Navbar bg="info" fixed="top" expand="lg" className=" navbar">
      <Navbar.Brand href="/">KOUAGOU FERDINAND</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects" className="option">
            PROJETS
          </Nav.Link>

          <Nav.Link href="/contact" className="option">
            CONTACT ME
          </Nav.Link>

          <Nav.Link href="/news" className="option" variant="primary">
            NEWS
          </Nav.Link>

          <NavDropdown title="SOCIAL MEDIAS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <FacebookIcon color="inherit" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <InstagramIcon color="inherit" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <LinkedInIcon color="inherit" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <YouTubeIcon color="inherit" />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default HeaderComponent;
