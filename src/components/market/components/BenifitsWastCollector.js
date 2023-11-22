import {
  faChartLine,
  faMale,
  faTrash,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import FeatureTwo from "components/FeatureTwo";
import React from "react";
import { Col, Row } from "reactstrap";

function BenifitsWastCollector() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }}>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faTrash}
          title={"Asset management"}
          text={
            "Keep track of where your bins are using GPS location, what their status is, detect fires or physical damage, and more."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faChartLine}
          title={"Increase efficiency"}
          text={
            "Ensure your collection routes are optimized and planned for the most profitable operations."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faTruckMoving}
          title={"Fleet management"}
          text={
            "Monitor and analyze everything from location and collection performance to fuel consumption and braking patterns. Reduce the maintenance and operating costs of your fleet."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faMale}
          title={"Reduce labor costs"}
          text={
            "By increasing the capacity of standard bins and reducing the number of collections required, you save on the basic labor costs that take up a large part of operating budgets."
          }
        />
      </Col>
    </Row>
  );
}

export default BenifitsWastCollector;
