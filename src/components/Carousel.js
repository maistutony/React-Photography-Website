import Carousel from "react-bootstrap/Carousel";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingCarousel() {
  const navigate=useNavigate()
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <Image
          src="https://i.imgur.com/5gK0aWb.jpg"
          alt="shot"
          fluid
          className="slide-img"
        />
        <Carousel.Caption className="caption">
          <h3 className="my-2 ">Elevating Professionalism</h3>
          <p className="my-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Button
            className="cta-btn my-2"
            onClick={() => {
              navigate("/contacts");
            }}
          >
            Book Session
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://i.imgur.com/IBu0AEA.jpg"
          alt="memories"
          fluid
          className="slide-img"
        />
        <Carousel.Caption className="caption">
          <h3 className="my-2 ">We create Experiences</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button
            className="cta-btn my-2"
            onClick={() => {
              navigate("/contacts");
            }}
          >
            Get A Quote
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://i.imgur.com/WBxLu2h.jpg"
          alt="perfection"
          fluid
          className="slide-img"
        />
        <Carousel.Caption className="caption">
          <h3 className="my-2">We Capture Emotions</h3>
          <p className="my-2 ">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button
            className="hero-btn cta-btn my-2"
            onClick={() => {
              navigate("/contacts");
            }}
          >
            Book Session
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingCarousel;
