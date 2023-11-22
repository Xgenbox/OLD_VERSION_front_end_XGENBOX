import {
  faDatabase,
  faMale,
  faPiggyBank,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import FeatureTwo from "components/FeatureTwo";
import React from "react";
import { Col, Row } from "reactstrap";

function BenefitsSmartCities() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }}>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faMale}
          title={"Less manpower"}
          text={
            "Save on labor costs by streamlining and optimizing waste management operations. Less frequent collections and less inefficient collections (visiting empty bins)."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faRoad}
          title={"Increased transparency"}
          text={
            "Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faDatabase}
          title={"Increased transparency"}
          text={
            "Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is."
          }
        />
      </Col>
      <Col className="order-md-2" md="6" style={{ backgroundSize: "cover" }}>
        <FeatureTwo
          icon={faPiggyBank}
          title={"Do more with less"}
          text={
            "Cities can reduce waste collection costs by up to 50% with our smart IoT-based hardware and software solution."
          }
        />
      </Col>
    </Row>
  );
}

export default BenefitsSmartCities;
