import { FormGroup, Row, Col, Label, Input, InputGroup } from "reactstrap";

import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { createQuote } from "Redux/actions/QuoteAction";
import { Button } from "@chakra-ui/react";
import FileInput from "components/FileInput";
import { createAppointment } from "Redux/actions/AppointmentAction";

function ApppointmentForm() {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state?.isLoading?.isLoading);
  const isSuccess = useSelector((state) => state?.success?.success);

  const showToastMessage = () => {
    toast.success("Request sent successfully.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(countries)

  const [form, setForm] = useState({
    sensors: [],
    disinfection: [],
    caracteristique: [],
  });

  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;
    console.log(e.target.value);
    if (name === "sensors") {
      if (checked) {
        setForm({
          ...form,
          sensors: [...form.sensors, value],
        });
      } else {
        setForm({
          ...form,
          sensors: form.sensors.filter((sensor) => sensor !== value),
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };







  const onSubmit = (e) => {
    e.preventDefault();


    const formdata = new FormData();

    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) {
        form[key].forEach((value) => {
          formdata.append(key, value);
        });
      } else {
        formdata.append(key, form[key]);
      }
    });
    // formdata.append('powerSupply', form.power)
    // formdata.append('connectivity', form.Connectivity)
    console.log(form);
    console.log(formdata);

    // dispatch(createQuote(formdata));
    dispatch(createAppointment(formdata))
    e.target.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      showToastMessage();
    }
  }, [isSuccess]);

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
          // display: 'flex',
        }}
      >
        <Row>
        <Col md="6">
            <div className=" mb-3">
              <label className="form-label">
                First Name<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  required
                  name={"firstName"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className=" mb-3">
              <label className="form-label">
                last Name <span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  required
                  name={"lastName"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className=" mb-3">
              <label className="form-label">
                E-mail<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  required
                  name={"email"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className=" mb-3">
              <label className="form-label">
                Phone number <span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  required
                  name={"phone"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <ToastContainer />






          <Col md="12">
            <div className=" mb-3">
              <label className="form-label">Preferred Date</label>
              <div className="input-group">
                <input
                  type="date"
                  name={"quantity"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className=" mb-3">
              <label className="form-label">Reason for Appointment</label>
              <div className="input-group">
                <input
                  type="text"
                  name={"reason"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className=" mb-3">
              <label className="form-label">Any Additional comments</label>
              <div className="input-group">
                <input
                  type="text"
                  name={"comment"}
                  className={classNames("form-control")}
                  onChange={onChangeHandler}
                />
                {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
              </div>
            </div>
          </Col>
        </Row>
        {/* Functional features */}


        {/*Optional features  */}



        <Row>
          <Col>
            <Button type="submit" variant="outline" colorScheme="green">
              {isLoad ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden"></span>
                </div>
              ) : (
                "Submit"
              )}{" "}
              <i className="fa-solid fa-floppy-disk"></i>
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default ApppointmentForm;
