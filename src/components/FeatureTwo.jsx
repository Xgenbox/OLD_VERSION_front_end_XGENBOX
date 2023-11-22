import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "reactstrap";

function FeatureTwo({ title, text, icon, titleColor, textColor, iconBg }) {
  return (
    <Row className="row-grid align-items-center justify-items-center ">
      <Col
        md="4"
        className="text-center d-flex align-items-center justify-content-center"
      >
        <div className="text-center ct-title  " style={{ color: "white" }}>
          <div
            className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle "
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              ...(iconBg === null
                ? {}
                : { backgroundColor: iconBg ?? "#3C976E" }),
            }}
          >
            {/* <i className="ni ni-settings-gear-65" /> */}

            <FontAwesomeIcon
              icon={icon}
              style={{ width: 50, height: 50, color: "#FFFFFF" }}
            />
          </div>
        </div>
      </Col>
      <Col md="8">
        <div
          className="text-align ct-title  "
          style={{ color: titleColor ?? "#434955" }}
        >
          {title}
        </div>
        <p
          style={{
            color: textColor ?? "#434955",
            fontSize: 15,
            boxShadow: "revert",
          }}
        >
          {text}
        </p>
      </Col>
    </Row>
  );
}

export default FeatureTwo;
