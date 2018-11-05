import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

const margin = {
  margin: "40px",
  background: "lightblue"
};
function App() {
  return (
    <div id="App">
      <h1 style={margin}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AddIntoApp />
      <div>
        <Container>
          <Row>
            <Col sm="4" style={{ background: "lightblue" }}>
              One of three columns
            </Col>
            <Col sm="4" style={{ background: "lightgreen" }}>
              One of three columns
            </Col>
            <Col sm="1" style={{ background: "orange" }}>
              One of three columns
            </Col>
          </Row>

          <Row>
            <Col xs="4" style={{ background: "lightblue" }}>
              Column XS of 4
            </Col>
            <Col xs="7" style={{ background: "gray" }}>
              Column XS of 7
            </Col>
          </Row>
          <Row>
            <Col xs="7" style={{ background: "lightblue" }}>
              Column XS of 7
            </Col>
          </Row>
          <Row>
            <Col xs="12" style={{ background: "lightblue" }}>
              Column XS of 12
            </Col>
          </Row>

          <Row>
            <Col sm="4" style={{ background: "lightgreen" }}>
              Column MD of 4
            </Col>
          </Row>
          <Row>
            <Col sm="7" style={{ background: "lightgreen" }}>
              Column MD of 7
            </Col>
          </Row>
          <Row>
            <Col sm="12" style={{ background: "lightgreen" }}>
              Column MD of 12
            </Col>
          </Row>

          <Row>
            <Col lg="4" style={{ background: "orange" }}>
              Column MD of 4
            </Col>
          </Row>
          <Row>
            <Col lg="7" style={{ background: "orange" }}>
              Column MD of 7
            </Col>
          </Row>
          <Row>
            <Col lg="12" style={{ background: "orange" }}>
              Column MD of 12
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

function AddIntoApp() {
  return (
    <div id="inApp">
      <h3>Yo Whaddup</h3>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//ReactDOM.render(<AddIntoApp />, inAppElement);
