import "./App.css";
import bgImg from "./img/bg.png";
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
import { Navbar, Container, NavDropdown, Nav, Row, Col } from "react-bootstrap";

import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  let [colImg] = useState(shoes1);
  let [num] = useState(0);
  let [numArray] = useState([0, 1, 2]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">푸딩 쇼핑몰</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      ></div>

      <Container>
        <Row>
          {/* <Col>
            <img src={shoes1} width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>

          <Col>
            <img src={shoes2} width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>

          <Col>
            <img src={shoes3} width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col> */}
          {numArray.map(function (a, i) {
            return <Columns shoes={shoes} colImg={colImg} num={num} i={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Columns(props) {
  return (
    <Col>
      <img src={props.colImg} width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </Col>
  );
}

export default App;
