import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Elements.css'
import logo from '../img/logo.png'

import Kosar from "./Kosar";
import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Top() {
  var user = localStorage.getItem('user');
  var admin = localStorage.getItem('admin');

  function Logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    window.location.assign("/webshop");
  }

  if(admin) {
    return (
      <Container>
        <Row>
        <Col className="d-flex align-items-center justify-content-between">
            <a href="/webshop">
              <img src={logo} alt="logo" width="75" height="75"/>
            </a>
            <Kosar />
        </Col>
      </Row>
      <Row>
        <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
          <Navbar.Brand style={{cursor:'default'}}>BDKWebshop-Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/webshop">Kezdőlap</Nav.Link>
                <Nav.Link href="/termekek/admin">Termékek kezelése</Nav.Link>
                <Nav.Link href="/felhasznalok/admin">Felhasználók kezelése</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link disabled style={{color:'white'}}>Bejelentkezve: {admin}</Nav.Link>
                <Nav.Link onClick={Logout} href="#">Kijelentkezés</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Col>
      </Row>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
              <a href="/webshop">
                <img src={logo} alt="logo" width="75" height="75"/>
              </a>
              <Kosar />
          </Col>
        </Row>
        <Row>
          <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
            <Navbar.Brand style={{cursor:'default'}}>BDK-Webshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/webshop">Kezdőlap</Nav.Link>
                <NavDropdown title="Hardverek" id="collasible-nav-dropdown">
                    <NavDropdown.Item key="processzor" onClick={() => window.location.assign(`/termekek/processzor`)}>Processzor</NavDropdown.Item>
                    <NavDropdown.Item key="videokartya" onClick={() => window.location.assign(`/termekek/videokartya`)}>Videókártya</NavDropdown.Item>
                    <NavDropdown.Item key="ram" onClick={() => window.location.assign(`/termekek/ram`)}>Ram</NavDropdown.Item>
                    <NavDropdown.Item key="merevlemez" onClick={() => window.location.assign(`/termekek/merevlemez`)}>Merevlemez</NavDropdown.Item>
                    <NavDropdown.Item key="alaplap" onClick={() => window.location.assign(`/termekek/alaplap`)}>Alaplap</NavDropdown.Item>
                    <NavDropdown.Item key="tápegység" onClick={() => window.location.assign(`/termekek/tápegység`)}>Tápegység</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Külső perifériák" id="collasible-nav-dropdown">
                    <NavDropdown.Item key="billentyűzet" onClick={() => window.location.assign(`/termekek/billentyűzet`)}>Billentyűzet</NavDropdown.Item>
                    <NavDropdown.Item key="egér" onClick={() => window.location.assign(`/termekek/egér`)}>Egér</NavDropdown.Item>
                    <NavDropdown.Item key="monitor" onClick={() => window.location.assign(`/termekek/monitor`)}>Monitor</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Egyéb kiegészítők" id="collasible-nav-dropdown">
                    <NavDropdown.Item key="egerpad" onClick={() => window.location.assign(`/termekek/egerpad`)}>Egérpad</NavDropdown.Item>
                    <NavDropdown.Item key="fejhallgato" onClick={() => window.location.assign(`/termekek/fejhallgato`)}>Fejhallgató</NavDropdown.Item>
                    <NavDropdown.Item key="gephaz" onClick={() => window.location.assign(`/termekek/gephaz`)}>Gépház</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                  {user ? (
                    <Nav>
                    <Nav.Link disabled style={{color:'white'}}>
                      Bejelentkezve: {user}
                    </Nav.Link>
                      <Nav.Link onClick={Logout} href="#">Kijelentkezés</Nav.Link>
                    </Nav>
                  ) 
                  : (
                  <Nav>
                    <Nav.Link href="/bejelentkezes">Bejelentkezés</Nav.Link>
                    <Nav.Link href="/regisztracio">Regisztráció</Nav.Link>
                  </Nav>
                  )}
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Top;
