/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,

  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "Redux/actions/authActions";
import AppLoader from "assets/Animations/AppLoader";
import { registerUser } from "Redux/actions/authActions";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { registerCollectorUser } from "Redux/actions/authActions";
import { registerEntrepriseUser } from "Redux/actions/authActions";

const initialValues = {
  email: '',
   password: '',
   firstName:'',
    lastName:'',
    typeCompany:"Organization or association",
    companyName:"",
    role:"ENTREPRISE",
    phone:"",
    typeCompany1:""


   }

   const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    // entityType: Yup.string().required('Entity Type is required'),
    companyName: Yup.string().required('Company Name is required'),
    phone: Yup.string().required('Phone is required'),



  });
const  CompanySignUp =() =>{
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch()
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const errors1 = useSelector(state=>state?.error?.errors)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory()
  const isSuccess = useSelector(state=>state?.success?.success)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showToastMessage = () => {
    toast.success('Collector  Created successfully.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });

  }

  useEffect(() => {
    if (isSuccess) {

      showToastMessage()
    }
  }, [isSuccess])
  const handleSubmit = (values) => {
    // Perform any actions (e.g., API calls) here
    // Access form values using "values" object
    if(values.typeCompany =="Other" && values?.typeCompany1 =="" ){
        toast.error('Type of company is required.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        });
        return false;


    }
    if(values.typeCompany =="Other" && values?.typeCompany1 !=""){
        values.typeCompany = values.typeCompany1

    }
    delete values.typeCompany1;
    console.log(values);
    dispatch(registerEntrepriseUser(values, history))
    setSubmitted(true); // Set the submitted state to true
  };
  // console.log(errors && errors)

  // {touched[name] && errors[name] || errors1&& errors1[name] ? (
  //   <Text style={styles.error}>{errors[name]} {errors1 && errors1[name]} </Text>
  //   ) : null}


    return (
      <>
        <DemoNavbar />
        <ToastContainer />
        <main >
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
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">

                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>sign up with credentials</small>
                      </div>
                      <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ errors, touched,
values
   }) => (
    <Form role="form">
    <FormGroup className={`mb-3   ${
              touched.firstName && errors.firstName ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="firstName"
            placeholder="First Name"
            type="text"
            className={`form-control ${
              touched.firstName && errors.firstName ? 'is-invalid' : ''
            }`}
            // className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="invalid-feedback"

          />


        </InputGroup>
      </FormGroup>
      <FormGroup className={`mb-3   ${
              touched.email && errors.email ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="lastName"
            placeholder="last Name"
            type="text"
            className={`form-control ${
              touched.lastName && errors.lastName ? 'is-invalid' : ''
            }`}
            // className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="invalid-feedback"

          />


        </InputGroup>
      </FormGroup>
      <FormGroup className={`mb-3 ${touched.entityType && errors.entityType ? 'has-danger' : ''}`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>

          {/* Dropdown for entity type */}
          <Field
            as="select"
            name="typeCompany"
            className={`form-control ${touched.typeCompany && errors.typeCompany ? 'is-invalid' : ''}`}
            // onChange={handleChange}
            // onBlur={handleBlur}
          >
            <option value="Organization or association">Organization or association</option>
            <option value="company">Company</option>
            <option value="Municipality">Municipality</option>
            <option value="Event organizer">Event organizer</option>
            <option value="Advertising agency">Advertising agency</option>
            <option value="Other">Other</option>
          </Field>

          <ErrorMessage name="typeCompany" component="div" className="invalid-feedback" />
        </InputGroup>
      </FormGroup>
      {values.typeCompany === 'Other' && (
        <FormGroup className={`mb-3 ${touched.typeCompany1 && errors.typeCompany1 ? 'has-danger' : ''}`}>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-building" />
              </InputGroupText>
            </InputGroupAddon>

            <Field
              name="typeCompany1"
              placeholder="Company Type"
              type="text"
              className={`form-control ${touched.typeCompany1 && errors.typeCompany1 ? 'is-invalid' : ''}`}
            />
            <ErrorMessage name="typeCompany1" component="div" className="invalid-feedback" />
          </InputGroup>
        </FormGroup>
      )}

        <FormGroup className={`mb-3 ${touched.companyName && errors.companyName ? 'has-danger' : ''}`}>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-building" />
              </InputGroupText>
            </InputGroupAddon>

            <Field
              name="companyName"
              placeholder="Company Name"
              type="text"
              className={`form-control ${touched.companyName && errors.companyName ? 'is-invalid' : ''}`}
            />
            <ErrorMessage name="companyName" component="div" className="invalid-feedback" />
          </InputGroup>
        </FormGroup>



      <FormGroup className={`mb-3   ${
              touched.phone && errors.phone ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-phone-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="phone"
            placeholder="phone"
            type="phone"
            className={`form-control ${
              touched.phone && errors.phone ? 'is-invalid' : ''
            }`}
            // className={`form-control ${errors && errors.phone ? 'is-invalid' : ''}`}
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="invalid-feedback"

          />


        </InputGroup>
      </FormGroup>
      <FormGroup className={`mb-3   ${
              touched.email && errors.email ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="email"
            placeholder="Email"
            type="email"
            className={`form-control ${
              touched.email && errors.email ? 'is-invalid' : ''
            }`}
            // className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="invalid-feedback"

          />


        </InputGroup>
      </FormGroup>
      <FormGroup className={`mb-3   ${
              touched.password && errors.password ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="password"
            placeholder="Password"
            // type="password"
            autoComplete="off"
            type={passwordVisible ? 'text' : 'password'}
            className={`form-control ${
              touched.password && errors.password ? 'is-invalid' : ''
            }`}

          />
          <ErrorMessage
            name="password"
            component="div"
            className="invalid-feedback"
          />
        <Button
      type="button"
      className="btn-icon"
      onClick={togglePasswordVisibility}
      style={{ marginLeft: '-40px' }}
    >
      {passwordVisible ? (
        "Hide"
      ) : (
        "Show"
      )}
    </Button>
        </InputGroup>
      </FormGroup>
      <div className="  ">
        {/* <Field
          type="checkbox"
          id="customCheckLogin"
          name="rememberMe"
          className="custom-control-input"
        /> */}
        {/* <label
          className="custom-control-label"
          htmlFor="customCheckLogin"
        > */}
          {touched.email && errors.email || errors1&& errors1.email ? (
            <>
            <br/>
                  <span style={{color:"red"}}> {errors1 && errors1.email} </span>
            </>
                  ) : null}
                  {touched.password && errors.password || errors1&& errors1.password ? (
            <>
            <br/>
                  <span style={{color:"red"}}> {errors1 && errors1.password} </span>
            </>
                  ) : null}
                  {touched.phone && errors.phone || errors1&& errors1.phone ? (
            <>
            <br/>
                  <span style={{color:"red"}}> {errors1 && errors1.phone} </span>
            </>
                  ) : null}
        {/* </label> */}
      </div>
      <div className="text-center">
      <Button
      className="my-4"
      color="primary"
      type="submit"
      disabled={isLoad}
      // onClick={handleSignIn}
    >
      {isLoad ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden"></span>
        </div>
      ) : (
        'Sign in'
      )}
    </Button>
      </div>
    </Form>
  )}
</Formik>
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


export default CompanySignUp;
