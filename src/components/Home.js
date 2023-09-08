import React from 'react'
import LandingCarousel from './Carousel'
import { Container } from 'react-bootstrap'
import Services from './Services'
import Featured from './Featured'
import Instafeeds from './Instafeeds'

function Home() {
  return (
    <Container fluid>
      <LandingCarousel />
      <Services />
      <Featured />
      <Instafeeds/>
    </Container>
  );
}

export default Home