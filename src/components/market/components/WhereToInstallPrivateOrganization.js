import { Col, Row } from "reactstrap";
import CardM from "./CardM";

function WhereToInstallaPrivateOrganization() {
  const images = [
    {
      imageURL: "university.png",
      name: "Universities",
    },
    {
      imageURL: "theme-parc.png",
      name: "Theme parks",
    },
    {
      imageURL: "hospital.png",
      name: "Hospitals",
    },
    {
      imageURL: "zoo.png",
      name: "Zoos",
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

export default WhereToInstallaPrivateOrganization;
