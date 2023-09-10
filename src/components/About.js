import React, { useState } from "react";
import { Container, Row, Card, Button,Image } from "react-bootstrap";
import CameraSetting from "../assets/camera settings.avif";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import personIcon from "../assets/person-icon.png"

function About() {
    const [show, setShow] = useState(false)
  function viewAll(e) {
      console.log(e.target.getAttribute("src"));
  }
  return (
    <Container fluid>
      <Row className="justify-content-center main-headline">
        Elevate Your Expectations with ClingShot Creative's Unconventional
        Expertise
      </Row>
      <Row>
        <Card className="abt-card col-md-4">
          <Card.Img
            variant="top"
            src="https://i.imgur.com/pSDu5kf.jpg"
            alt="composition"
            className="abt-image"
            onMouseEnter={viewAll}
          />
          <Card.Body className="abt-body">
            <Card.Title className="headlines">Great Compositions</Card.Title>
            <Card.Text className="abt-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a href="#">Read more</a>
          </Card.Body>
        </Card>
        <Card className="abt-card col-md-4">
          <Card.Img
            variant="top"
            src={CameraSetting}
            alt="camera-setting"
            className="abt-image"
          />
          <Card.Body className="abt-body">
            <Card.Title className="headlines">Professionalism</Card.Title>
            <Card.Text className="abt-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a href="#">Read more</a>
          </Card.Body>
        </Card>
        <Card className="abt-card col-md-4">
          <Card.Img
            variant="top"
            src="https://i.imgur.com/JPEeYe9.jpg"
            alt="lighting"
            className="abt-image"
          />
          <Card.Body className="abt-body">
            <Card.Title className="headlines">Great Lighting</Card.Title>
            <Card.Text className="abt-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a href="#">Read more</a>
          </Card.Body>
        </Card>
      </Row>
      <Row className="my-3 justify-content-center main-headline">
        Completed Projects
      </Row>
      <Row className="justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center col-md-3">
          <h4 className="text-center headlines">Potraits</h4>
          <div className="progress-bar">
            <CircularProgressbar value="72" text="72%" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center col-md-3">
          <h4 className="text-center headlines">Retouched Photos</h4>
          <div className="progress-bar">
            <CircularProgressbar value="65" text="65%" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center col-md-3">
          <h4 className="text-center headlines">Wedding Projects</h4>
          <div className="progress-bar">
            <CircularProgressbar value="50" text="50%" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center col-md-3">
          <h4 className="text-center headlines">Product Photographs</h4>
          <div className="progress-bar">
            <CircularProgressbar value="80" text="80%" />
          </div>
        </div>
      </Row>
      <Row className="justify-content-center main-headline">
        What Our Clients Say About Us
      </Row>
      <Row className="justify-content-center testimonial-main">
        <div className="d-flex flex-column align-items-center col-md-6">
          <h4>See How We Made Memories for Our Clients</h4>
          <p>Give us the opportuninty to create yours too</p>
          <Button className="cta-btn">Get A Quote</Button>
        </div>
        <div className="col-md-6">
          <Row className="testimonial-card">
            <div className="col-md-9">
              <p className="testimonial">
                Some quick example text to build on the card title and make up
              </p>
              <p className="quotes">customer1</p>
            </div>
            <div className="d-flex align-items-center justify-content-center testimonial-img-div col-md-3">
              <Image
                className="testimonial-img cta-btn"
                src={personIcon}
                alt="customer1"
              />
            </div>
          </Row>
          <Row className="testimonial-card">
            <div className="col-md-9">
              <p className="testimonial">
                Some quick example text to build on the card title and make up
              </p>
              <p className="quotes">customer2</p>
            </div>
            <div className="d-flex  align-items-center justify-content-center testimonial-img-div col-md-3">
              <Image
                className="testimonial-img cta-btn"
                src={personIcon}
                alt="customer2"
              />
            </div>
          </Row>
          <Row className="testimonial-card">
            <div className="col-md-9">
              <p className="testimonial">
                Some quick example text to build on the card title and make up
              </p>
              <p className="quotes">customer3</p>
            </div>
            <div className="d-flex align-items-center justify-content-center testimonial-img-div col-md-3">
              <Image
                className="testimonial-img cta-btn"
                src={personIcon}
                alt="customer3"
              />
            </div>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default About;
