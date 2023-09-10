import { Image,Tabs,Tab, Row } from "react-bootstrap";

function Works() {
    const potraits = [
      "https://i.imgur.com/Gi1eNNJ.jpg",
      "https://i.imgur.com/DPZbNFD.jpg",
      "https://i.imgur.com/8Wf5oqV.jpg",
      "https://i.imgur.com/RXjucUq.jpg",
      "https://i.imgur.com/6Xb3v8w.jpg",
      "https://i.imgur.com/3KfClqV.jpg",
      "https://i.imgur.com/Wus6w28.jpg",
      "https://i.imgur.com/3KfClqV.jpg",
      "https://i.imgur.com/DPZbNFD.jpg",
      "https://i.imgur.com/6Xb3v8w.jpg",
    ];
  return (
    <Tabs
      defaultActiveKey="portraits"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="portraits" title="Portaits">
        <Row>
          {potraits.map((item, index) => (
            <Image key={index} src={item} className="col-md-3 work-image" />
          ))}
        </Row>
      </Tab>
      <Tab eventKey="retouched" title="Retouched">
        <Row>
          {potraits.map((item, index) => (
            <Image key={index} src={item} className="col-md-3 work-image" />
          ))}
        </Row>
      </Tab>
      <Tab  eventKey="wedding" title="Wedding Photographs">
        <Row>
          {potraits.map((item, index) => (
            <Image key={index} src={item} className="col-md-3 work-image" />
          ))}
        </Row>
      </Tab>
      <Tab eventKey="products" title="Products photographs">
        <Row>
          {potraits.map((item, index) => (
            <Image key={index} src={item} className="col-md-3 work-image" />
          ))}
        </Row>
      </Tab>
    </Tabs>
  );
}

export default Works;
