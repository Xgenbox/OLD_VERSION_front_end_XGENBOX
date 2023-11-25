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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { useSelector } from "react-redux";


const DemoNavbar = () => {
  const user = useSelector((state) => state.auth);
  console.log( user)

  // State for your collapse functionality
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  return (
      <>
        <header className="header-global ">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom mb-10"
            expand="lg"
            id="navbar-main"
            style={{
        backdropFilter: 'blur(3px)', // Adjust the blur intensity as needed
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the background color and opacity as needed


      }}

          >

            <Container


            >
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  style={{width: "200px", height: "auto"}}

                  src={

                    require("assets/images/logo.png")
                  }
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={
                            require("assets/images/logo (1).png")
                            // "https://xgenbox.com/wp-content/uploads/2023/03/logo.png"
                            }
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>




                {/*  */}
                <Nav className="align-items-lg-center ml-lg-auto " navbar>












                <Nav className="navbar-nav-hover align-items-lg-center  " navbar>


                  {/* Products */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1  " />
                      <span className="nav-link-inner--text ">Products</span>

                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/smart-box" tag={Link}>
                        Smart box
                      </DropdownItem>
                      <DropdownItem to="/fleet-management-platform" tag={Link}>
                        Fleet Management platform
                      </DropdownItem>

                    </DropdownMenu>
                  </UncontrolledDropdown>


                 {/* Markets */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Markets</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/smart-cities" tag={Link}>
                        Smart cities
                      </DropdownItem>
                      <DropdownItem to="/commercial-establishments" tag={Link}>
                        Commercial establishments
                      </DropdownItem>
                      <DropdownItem to="/private-organizations" tag={Link}>
                        private organizations
                      </DropdownItem>
                      <DropdownItem to="/waste-collectors" tag={Link}>
                        Waste collectors
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                 {/* Company */}
                 <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Company</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about-company" tag={Link}>
                        About Company
                      </DropdownItem>
                      <DropdownItem to="/partnership-opportunities" tag={Link}>
                        Partnership opportunities
                      </DropdownItem>
                      {/* <DropdownItem to="/admin" tag={Link}>
                        Admin
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* Contact */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/contact-details" tag={Link}>
                        Contact details
                      </DropdownItem>
                      <DropdownItem to="/quote-request" tag={Link}>
                        Quote request
                      </DropdownItem>
                      <DropdownItem to="/technical-assistance" tag={Link}>
                        Technical assistance
                      </DropdownItem>

                    </DropdownMenu>
                  </UncontrolledDropdown>

                    {/* Login */}

{
                  !user?.isConnected && (
                    <>

                    <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      // href="/login"
                      id="tooltip3335890747"
                      // target="_blank"
                      to="/login"
                      tag={Link}

                    >
<i className="ni ni-key-25" />
                      <span className="nav-link-inner--text d-lg-none">
                        Login
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip3335890747">
                      Login
                    </UncontrolledTooltip>
                  </NavItem>


                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      // href="/register-page"
                      // to={
                      //   "/register-page"
                      // }
                      to="/register-page"
                      tag={Link}

                      id="tooltip333589075"
                      // target="_blank"
                    >
<i className="ni ni-circle-08" />
                      <span className="nav-link-inner--text d-lg-none">
                        Register
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589075">
                      Register
                    </UncontrolledTooltip>
                  </NavItem>
                    </>
                  )
}

                </Nav>

                </Nav>
                {
                  user?.isConnected && (
                    <>
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon"
                        // href="/admin"
                        to="/admin"
                        tag={Link}
                        id="tooltip3335890744"
                        // target="_blank"
                      >
                      <i className="ni ni-circle-08" />
                        <span className="nav-link-inner--text d-lg-none">
                          Admin
                        </span>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip3335890744">
                        Admin
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon"
                        // href="/admin"
                        to="/profile-page"
                        tag={Link}
                        id="tooltip333589074"
                        // target="_blank"
                      >
                      <i className="ni ni-circle-08" />
                        <span className="nav-link-inner--text d-lg-none">
                          Profile
                        </span>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip333589074">
                        Profile
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon"
                        // href="/admin"
                        to="/"
                        tag={Link}
                        id="tooltip333589074"
                        // target="_blank"
                      >
                      <i className="ni ni-circle-08" />
                        <span className="nav-link-inner--text d-lg-none">
                          Logout
                        </span>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip333589074">
                        Logout
                      </UncontrolledTooltip>
                    </NavItem>
                  </Nav>
                    </>
                  )

                }

              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }


export default DemoNavbar;
