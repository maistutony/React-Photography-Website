import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer text-dark py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Your photography studio's description can go here. Tell your
              visitors what sets you apart.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              <p>
                <strong>Address:</strong> 123 Photography Street
                <br />
                City, State 12345
              </p>
              <p>
                <strong>Email:</strong> technoarena@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </address>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Dribble
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        &copy; {new Date().getFullYear()} ClingShot Creative
      </div>
    </footer>
  );
};

export default Footer;
