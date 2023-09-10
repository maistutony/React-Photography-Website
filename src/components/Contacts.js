import React,{useEffect,useRef} from 'react'
import GoogleMap from './GoogleMap'
import { Container, Row } from 'react-bootstrap'
import BookingForm from './BookingForm';

function Contacts() {
    const firstColumnRef = useRef(null);
  const secondColumnRef = useRef(null);
    useEffect(() => {
      // Get the height of the first column
      const firstColumnHeight = firstColumnRef.current.clientHeight;

      // Set the height of the second column to match the first column
      secondColumnRef.current.style.height = `${firstColumnHeight}px`;
    }, []);
    return (
      <Container fluid>
        <Row className="contact-hero ">
          <div class="overlay"></div>
          <Row className="content justify-content-center align-item-center">
            <div className="col-md-4">
              <h5>Contacts</h5>
              <div>+254 720482963</div>
            </div>
            <div className="col-md-4">
              <h5>Email</h5>
              <div>
                <a href="mailto:technoarena@gmail.com">technoarena@gmail.com</a>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Address</h5>
              <div>Avenue Road-Nairobi</div>
            </div>
          </Row>
        </Row>

        <Row className="d-flex booking-form">
          <div className="col-md-6" ref={firstColumnRef}>
            <BookingForm />
          </div>
          <diV
            className="social-media col-md-6 align-items-center"
            ref={secondColumnRef}
          >
            <Row>Follow Us On Social Media</Row>
            <div className="social-links">
              <a href="#">facebook</a>
            </div>
            <div className="social-links">
              <a href="#">Twitter</a>
            </div>
            <div className="social-links">
            <a href="#">Instagram</a>
            </div>
            <div className="social-links">
              <a href="#">Dribble</a>
            </div>
          </diV>
        </Row>
        <Row>
          <div className="google-map">
            <GoogleMap />
          </div>
        </Row>
      </Container>
    );
}

export default Contacts