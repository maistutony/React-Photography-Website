import React from 'react'
import { Row, Card, Button } from 'react-bootstrap'
import portrait from "../assets/portrait.jfif"
import product from "../assets/product.jfif";
import retouching from "../assets/retouching.jfif";
import wedding from "../assets/wedding.jfif";
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
    return (
      <>
        <Row className="text-dark main-headline">Our Services To You</Row>
        <Row>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={portrait} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title className="headlines">Potrait Photograghs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() => { navigate("/contacts") }}
                className="cta-btn"
                variant="primary"
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={wedding} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title className="headlines">Wedding photographs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() => { navigate("/contacts") }}
                className="cta-btn"
                variant="primary"
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img
              variant="top"
              src={retouching}
              className="services-image"
            />
            <Card.Body className="justify-content-center">
              <Card.Title className="headlines">Photo Retouching</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() => { navigate("/contacts") }}
                className="cta-btn"
                variant="primary"
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={product} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title className="headlines">Product Photography</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() => { navigate("/contacts") }}
                className="cta-btn"
                variant="primary"
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </>
    );
}

export default Services