import "./App.css";
import bgImg from "./img/bg.png";
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Row,
  Col,
  AccordionButton,
} from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Pages/Detail.js";

function App() {
  let [shoes] = useState(data);
  let [colImg] = useState(shoes1);
  let [num] = useState(0);
  let [numArray] = useState([0, 1, 2]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"
            onClick={() => { navigate("/") }}>
            푸딩 쇼핑몰
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                {" "}
                홈{" "}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                상세페이지
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
              >
                이벤트
              </Nav.Link>
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

      {/* <Link to="/">홈</Link> */}
      {/* <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bgImg + ")" }}
              ></div>

              <Container>
                <Row>
                  {numArray.map(function (a, i) {
                    return (
                      <Columns
                        shoes={shoes}
                        colImg={colImg}
                        num={num}
                        i={i}
                        key={i}
                      />
                    );
                  })}
                </Row>
              </Container>
            </>
          }
        />{" "}
        {/* 메인페이지 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>회사 멤버스</div>} />
          <Route path="location" element={<div>회사 위치</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지입니다</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
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
