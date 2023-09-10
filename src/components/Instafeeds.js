import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import download1 from "../assets/download1.jfif";
import download2 from "../assets/download2.jfif";
import download3 from "../assets/download3.webp";
import download4 from "../assets/download4.png";
import download5 from "../assets/download5.jfif";
import download6 from "../assets/download6.jfif";
import { Image,Row } from 'react-bootstrap';


function Instafeeds() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

    return (
      <>
        <Row className="justify-content-center main-headline">
          Our Live Feeds From Instagram
        </Row>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          arrows={false}
          autoPlay={true}
        >
          <div className="insta-images">
            <Image src={download1} alt="download1" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download2} alt="download2" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download3} alt="download3" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download4} alt="download4" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download5} alt="download5" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download6} alt="download6" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download4} alt="download7" className="w-100 h-100" />
          </div>
          <div className="insta-images">
            <Image src={download2} alt="download8" className="w-100 h-100" />
          </div>
        </Carousel>
      </>
    );
}

export default Instafeeds