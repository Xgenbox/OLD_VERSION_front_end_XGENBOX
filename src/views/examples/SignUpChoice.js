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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // Form,

  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "Redux/actions/authActions";
import AppLoader from "assets/Animations/AppLoader";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const initialValues = {
  email: '',
   password: ''
   }

   const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

function SignUpChoice () {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch()
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const errors1 = useSelector(state=>state?.error?.errors)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = (values) => {
    // Perform any actions (e.g., API calls) here
    console.log(values);
    // Access form values using "values" object
    dispatch(loginUser(values))
    setSubmitted(true); // Set the submitted state to true
  };
  // console.log(errors && errors)

  // {touched[name] && errors[name] || errors1&& errors1[name] ? (
  //   <Text style={styles.error}>{errors[name]} {errors1 && errors1[name]} </Text>
  //   ) : null}

    return (
      <>
      {/* <AppLoader/> */}
        <DemoNavbar />
        <main
            className="position-relative"


         >
        <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7"
            style={{
                marginBottom:"20%"
             }}
            >
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign-Up as a</small>
                      </div>
                      <div className="btn-wrapper text-center">

                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          // href="#pablo"
                          onClick={(e) => {
                            e.preventDefault()
                            history.push("/register-page")
                          }}

                          style={
                                {
                                    marginRight:"10%",
                                }
                          }

                        >

                          <span className="btn-inner--text">Citizen</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          // href="#pablo"
                          onClick={(e) => {
                            history.push("/signup-Collector-page")
                          }}


                        >

                          <span className="btn-inner--text">Collector</span>
                        </Button>

                      </div>
                      <div className="btn-wrapper text-center"
                        style={{
                            marginTop: "5%"
                        }}
                      >



<Button
  className="btn-neutral btn-icon ml-1"
  color="default"
  // href="#pablo"
  onClick={()=>{
    history.push("/signup-company-page")

  }
  }


>

  <span className="btn-inner--text">Company</span>
</Button>

</div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">

                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                     <Link
                        className="text-light"
                        to="/login"
                      >
                        <small>Joined us before? Login</small>
                      </Link>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
        {/* <SimpleFooter /> */}
      </>
    );

}

export default SignUpChoice;
