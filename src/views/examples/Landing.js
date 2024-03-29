/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import { Badge, Button, Card, CardBody, Container, Row, Col } from "reactstrap";
// import logo from 'https://xgenbox.com/wp-content/uploads/2023/03/logo.svg';
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCloud,
  faQuestion,
  faRecycle,
  faSolarPanel,
  faTrash,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import TabExemple from "components/TabExemple.js";
import Benefits from "components/Benefits.js";
import Faq from "components/FaQ.js";
import FooterComponent from "components/FooterComponents.js";
import TopButton from "components/TopButton/TopButton.js";
import Logo from 'assets/images/logo.svg';
class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  constructor(props) {
    super(props);
    this.myRefSolution = React.createRef();
    this.myRefFeatures = React.createRef();
    this.myRefFaq = React.createRef();
  }
  scrollToSolution = () => {
    this.myRefSolution.current.scrollIntoView({ behavior: "smooth" });
  };
  scrollToFeatures = () => {
    this.myRefFeatures.current.scrollIntoView({ behavior: "smooth" });
  };
  scrollToFAQ = () => {
    this.myRefFaq.current.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300 ">
              <div
                className="shape shape-style-1 shape-default mb--100 "
                style={{
                  backgroundImage:
                  `url(${require('assets/images/Sans-titre-2.png')})`,

                  height: "100vh",
                  backgroundSize: "cover",
                  filter: "brightness(70%) ",
                }}
              ></div>

              <Container className="py-lg-md d-flex justify-content-center">
                <div className="col px-0">
                  <Row className="justify-content-center">
                    <div
                      className="d-flex justify-content-center align-items-center  img-fluid  circle rounded rounded-circle"
                      style={{
                        backgroundColor: "white",
                        width: "220px",
                        height: "220px",
                      }}
                    >
                      <img
                        alt="..."
                        className="rounded-circle img-fluid  "
                        src={
                          Logo
                        }
                        width={200}
                        style={{ zIndex: "1" }}
                        // onMouseOver={(e) =>
                        //   (e.currentTarget.parentNode.style.backgroundColor =
                        //     "#3C976E")
                        // }
                        // onMouseOut={(e) =>
                        //   (e.currentTarget.parentNode.style.backgroundColor =
                        //     "white")
                        // }
                      />
                    </div>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew pb-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container

            >
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 "
                      style={{backgroundColor: "#f8f7fe"}}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Solutions
                          </h6>

                          <Button
                            className="mt-4"
                            color="primary"
                            href="#solution"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollToSolution();
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0"
                        style={{backgroundColor: "#f8f7fe"}}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Features
                          </h6>

                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollToFeatures();
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0"
                        style={{backgroundColor: "#f8f7fe"}}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Frequently Asked Questions
                          </h6>

                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollToFAQ();
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg"
            style={{backgroundColor: "#f8f7fe"}}
          >
            <Container
              // className="justify-content-center text-center mb-lg"

            >
              <Row className="justify-content-center text-center mb-lg"

              >
                <Col className="mb-5 mb-lg-0" lg="6">
                  <h1 className="display-3">
                    Do you have a waste problem ?{" "}
                    {/* <span>completed with examples</span> */}
                  </h1>
                  <p className="lead">
                    Are you wasting money on inefficient waste collection? Do
                    you not know when your bins are being collected? Do your
                    bins regularly overflow with waste? If this sounds familiar,
                    you could benefit from XGENBOX’s solution.
                  </p>
                  {/* <div className="btn-wrapper">
                    <Button

                      color="primary"
                      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-landing-page"
                    >
                      View all pages &amp; documentation
                    </Button>
                    <Button

                      className="mt-3 mt-md-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                    >
                      Download React
                    </Button>
                  </div> */}
                  <Row>
                    <Col>
                      {/* <FontAwesomeIcon icon={faHome} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" /> */}

                        <FontAwesomeIcon icon={faTruck} />
                      </div>
                      <h4>Inefficient collection</h4>
                    </Col>
                    <Col>
                      {/* <FontAwesomeIcon icon={faSearch} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" />
                         */}
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                      <h4>Overflowing bins</h4>
                    </Col>
                    <Col>
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" />

                       */}
                        <FontAwesomeIcon icon={faRecycle} />
                      </div>
                      <h4>Low diversion rates</h4>
                    </Col>
                    <Col>
                      {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" /> */}
                        <FontAwesomeIcon icon={faQuestion} />
                      </div>
                      <h4>Lack of information</h4>
                    </Col>
                    <Col>
                      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" /> */}
                        <FontAwesomeIcon icon={faCloud} />
                      </div>
                      <h4>High emissions</h4>
                    </Col>
                    <Col>
                      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        {/* <i className="ni ni-settings-gear-65" /> */}
                        <FontAwesomeIcon icon={faBug} />
                      </div>
                      <h4>Insects and vermin</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5" ref={this.myRefSolution}>
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5"> */}
                    {/* <i className="ni ni-settings-gear-65" /> */}
                    {/* </div> */}
                    <h3>Presentation of XGENBOX's Solution</h3>
                    <p>
                      XGENBOX offers a comprehensive and intelligent waste
                      management solution using an application connected to a
                      smart bin sensor. Our integrated range of products
                      includes:
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <FontAwesomeIcon icon={faSolarPanel} />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Solar-powered waste compactor
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <FontAwesomeIcon icon={faTruckFast} />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Fleet management application
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  {/* <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  /> */}
                  <iframe
                    title="XGENBOX Solution Video"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/Xu4Uy0f_XY0"
                    allowFullScreen
                    width="100%"
                    height="300"
                  />
                </Col>
              </Row>

              {/* <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row> */}
            </Container>
            <section
              // className="section section-lg pt-lg-0 mt-400"
              style={{
                marginTop: 60,
              }}
            >
              <Container
                className="py-lg-md d-flex"

                // style={{marginTop: "-100px"}}
              >
                <Row className="row-grid  ">
                  <Col className="order-md-1" md="6">
                    <Row>
                      <Col className="order-md-1" md="6">
                        <div className="pr-md-5">
                          {/* <h3>Awesome features</h3> */}
                          <div
                            className="d-flex justify-content-center  align-items-center  img-fluid  circle rounded rounded-circle"
                            style={{
                              backgroundColor: "white",
                              width: "150px",
                              height: "150px",
                              border: "solid",
                              borderColor: "#3C976E",
                            }}
                          >
                            <img
                              alt="..."
                              className="rounded-circle img-fluid  "
                              src={
                                require("assets/images/bin.png")
                              }
                              width={150}
                              style={{ zIndex: "1" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.parentNode.style.backgroundColor =
                                  "#3C976E")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.parentNode.style.backgroundColor =
                                  "white")
                              }
                            />
                          </div>
                        </div>
                      </Col>
                      <Col className="order-md-2" md="6">
                        <h3>Smart box</h3>
                        <p>
                          Compatible with standard 140L and 360L wheeled bins
                          for easy and safe waste removal, and it also
                          communicates the information it collects in real-time
                          via wireless transmission.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="order-md-1" md="6">
                    <Row
                    // style={{marginTop:"100px"}}
                    >
                      <Col className="order-md-1" md="6">
                        <div className="pr-md-5">
                          {/* <h3>Awesome features</h3> */}
                          <div
                            className="d-flex justify-content-center  align-items-center  img-fluid  circle rounded rounded-circle"
                            style={{
                              backgroundColor: "white",
                              width: "150px",
                              height: "150px",
                              border: "solid",
                              borderColor: "#3C976E",
                            }}
                          >
                            <img
                              alt="..."
                              className="rounded-circle img-fluid  "
                              // src="https://xgenbox.com/wp-content/uploads/2023/04/65699-copie.png"
                              src={
                                require("assets/images/65699-copie.png")
                              }
                              width={150}
                              style={{ zIndex: "1" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.parentNode.style.backgroundColor =
                                  "#3C976E")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.parentNode.style.backgroundColor =
                                  "white")
                              }
                            />
                          </div>
                        </div>
                      </Col>
                      <Col className="order-md-2" md="6">
                        {/* <div className="pr-md-5"> */}

                        <h3>Fleet management application</h3>
                        <p>
                          Capable of leveraging data from your current waste
                          management operations and transforming your manually
                          scheduled routes into fully optimized routes using
                          machine learning algorithms.
                        </p>

                        {/* </div> */}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section " ref={this.myRefFeatures}>
              <div
                className="shape shape-style-1 shape-default flex align-items-sm-center"
                style={{
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: "400",
                  color: "#434955",
                  marginBottom: 20,
                }}
              >
                Features
              </div>

              <TabExemple />
            </section>
            <section className="section bg-secondary">
              <div
                className="shape shape-style-1 shape-default flex align-items-sm-center"
                style={{
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: "400",
                  color: "#434955",
                  marginTop: -20,
                }}
              >
                Who benefits from our solution ?
              </div>

              <Benefits />
            </section>
          </section>

          <section className="section " ref={this.myRefFaq}>
            <div
              className="shape shape-style-1 shape-default flex align-items-sm-center"
              style={{
                textAlign: "center",
                fontSize: 28,
                fontWeight: "400",
                color: "#434955",
                marginBottom: 20,
              }}
            >
              Frequently asked questions
            </div>

            <Container>
              <Faq />
            </Container>
          </section>
          {/* <section className="section bg-secondary">

            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>


            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section> */}
          {/* <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section> */}
          {/* <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>

            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section> */}
          {/* <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <Download /> */}

          <TopButton />
        </main>

        <FooterComponent />
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Landing;
