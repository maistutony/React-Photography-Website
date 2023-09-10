import React from 'react'
import { Image,Row } from 'react-bootstrap';

function Featured() {
  return (
    <>
      <Row className="justify-content-center main-headline">
        Featured Works
      </Row>
      <div className="grid-container">
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/Gi1eNNJ.jpg"
            alt="image1"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/DPZbNFD.jpg"
            alt="image2"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/RXjucUq.jpg"
            alt="image3"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/8Wf5oqV.jpg"
            alt="image6"
            className="w-100 h-100"
          />
        </div>

        <div className="grid-item">
          <Image
            src="https://i.imgur.com/6Xb3v8w.jpg"
            alt="image5"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/3KfClqV.jpg"
            alt="image4"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/Wus6w28.jpg"
            alt="image7"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/3KfClqV.jpg"
            alt="image8"
            className="w-100 h-100"
          />
        </div>

        <div className="grid-item">
          <Image
            src="https://i.imgur.com/DPZbNFD.jpg"
            alt="image9"
            className="w-100 h-100"
          />
        </div>
        <div className="grid-item">
          <Image
            src="https://i.imgur.com/6Xb3v8w.jpg"
            alt="image10"
            className="w-100 h-100"
          />
        </div>
      </div>
    </>
  );
}

export default Featured