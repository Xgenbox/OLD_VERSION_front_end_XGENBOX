import {
  faBuildingColumns,
  faCartShopping,
  faCity,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Row } from "reactstrap";
import FeatureTwo from "./FeatureTwo";

function Benefits() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }}>
      <Col
        className="order-md-2"
        md="6"
        style={{
          backgroundImage: `url(${require('assets/images/smartcity-logistica02-scaled.jpeg')}`,
          height: "350px",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FeatureTwo
          icon={faCity}
          title={"Smart cities"}
          text={
            "In smart cities, smart traffic, smart lighting, and smart energy are all part of the picture, and smart waste management is an integral part of any smart city. Our offerings are fully stacked and vertically integrated so that everyone can see and feel the direct benefits of using our solution."
          }
          titleColor={"white"}
          textColor={"white"}
          iconBg={null}
        />
      </Col>
      <Col
        className="order-md-2"
        md="6"
        style={{
          // backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/3D_Architectural_Rendering_of_Commercial_Shopping_Mall_1366x768.jpg')`,
          backgroundImage: `url(${require('assets/images/3D_Architectural_Rendering_of_Commercial_Shopping_Mall_1366x768.jpeg')}`,
          height: "350px",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FeatureTwo
          icon={faCartShopping}
          title={"Commercial establishments"}
          text={
            "Whether it’s a shopping center, convention center, airport, or office complex, XGENBOX’s waste management solutions have helped customers save millions of dollars by reducing the cost of their waste management operations."
          }
          titleColor={"white"}
          textColor={"white"}
          iconBg={null}
        />
      </Col>
      <Col
        className="order-md-2"
        md="6"
        style={{
          // backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/488557-theme_parks-nature.jpg')`,
          backgroundImage: `url(${require('assets/images/488557-theme_parks-nature.jpeg')}`,
          height: "350px",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FeatureTwo
          icon={faBuildingColumns}
          title={"Private organizations"}
          text={
            "Whether it is a university campus, a theme park, a hospital, or a zoo, XGENBOX has provided customized deployments to clients with a myriad of different needs. The cost benefits and environmental benefits observed in large-scale municipal or commercial deployments are just as well replicated on a smaller scale."
          }
          titleColor={"white"}
          textColor={"white"}
          iconBg={null}
        />
      </Col>
      <Col
        className="order-md-2"
        md="6"
        style={{
          // backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/istockphoto-922611582-612x612-1.jpg')`,
          backgroundImage: `url(${require('assets/images/istockphoto-922611582-612x612-1.jpeg')}`,
          height: "350px",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FeatureTwo
          icon={faTruck}
          title={"Waste collectors"}
          text={
            "Whether it’s a family-owned hauler, a municipality, or a large waste management company responsible for multiple counties, our solutions have provided insights into operations, identified areas for efficiency improvement, and improved performance in several key areas of fleet management."
          }
          titleColor={"white"}
          textColor={"white"}
          iconBg={null}
        />
      </Col>
    </Row>
  );
}

export default Benefits;
