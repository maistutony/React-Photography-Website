import React from 'react'
import { Row, Card, Button } from 'react-bootstrap'
import portrait from "../assets/portrait.jfif"
import product from "../assets/product.jfif";
import retouching from "../assets/retouching.jfif";
import wedding from "../assets/wedding.jfif";

function Services() {
    return (
        <>
            <Row className='my-3 text-dark services-headline'>Our Services To You</Row>
        <Row>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={portrait} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title>Potrait Photograghs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={wedding} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title>Wedding photographs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img
              variant="top"
              src={retouching}
              className="services-image"
            />
            <Card.Body className="justify-content-center">
              <Card.Title>Photo Retouching</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 services-card">
            <Card.Img variant="top" src={product} className="services-image" />
            <Card.Body className="justify-content-center">
              <Card.Title>Product Photography</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Row>
      </>
    );
}

export default Services