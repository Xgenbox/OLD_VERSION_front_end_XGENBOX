import { Col, Row } from "reactstrap";
import CardM from "./CardM";

function WhereToInstall() {
  const images = [
    {
      imageURL: "commercial.png",
      name: "Malls",
    },
    {
      imageURL: "aeroports.png",
      name: "Airport",
    },
    {
      imageURL: "congress.png",
      name: "Congress Palace",
    },
    {
      imageURL: "bureaux.png",
      name: "Office complex",
    },
  ];

  return (
    <>
      <Row>
        {images.map((image, index) => (
          <Col key={index} className="order-md-2" md="3">
            <CardM imageURL={image.imageURL} name={image.name} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default WhereToInstall;
