/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { AddBin } from "Redux/actions/BinAction";
import { SET_IS_SECCESS } from "Redux/types";
import { Link } from "react-router-dom";
import { FetchAllQuote } from "Redux/actions/QuoteAction";
import { FetchAllBinsNotInUse } from "Redux/actions/BinAction";
import { AddPointBin } from "Redux/actions/BinAction";
import { useParams } from "react-router-dom";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button as CButton } from "@chakra-ui/react";

const animatedComponents = makeAnimated();
const CreateBinPoint = () => {
  const profile = useSelector((state) => state?.profile?.profile);
  const error = useSelector((state) => state.error?.errors);

  const isLoad = useSelector((state) => state?.isLoading?.isLoading);
  const isSuccess = useSelector((state) => state?.success?.success);
  const ListOfQuote = useSelector((state) => state?.quote?.quote?.quotes);
  const ListOfBinsNotInUse = useSelector(
    (state) => state?.ListOfBinsNotInPointBin?.ListOfBinsNotInPointBin
  );
  const [selectedBins, setSelectedBins] = useState([]);
  const [governorates, setgovernorates] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Tunis");
  const [selectedMunicipal, setMunicipal] = useState("Tunis");
  const [selectedValues, setSelectedValues] = useState([]);
  const dispatch = useDispatch();

  dispatch({
    type: SET_IS_SECCESS,
    payload: false,
  });

  useEffect(() => {
    dispatch(FetchAllQuote());
  }, [ListOfQuote]);

  const showToastMessage = () => {
    toast.success("Bin created successfully.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const [form, setForm] = useState({
    bins: [],
  });

  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // console.log(form);
  };
  useEffect(() => {
    if (isSuccess) {
      showToastMessage();
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(FetchAllBinsNotInUse());
  }, [ListOfBinsNotInUse]);
  const handleSelectChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
  };

  // console.log(ListOfBinsNotInUse)

  const { idQuote } = useParams();
  // console.log("Params:", useParams())
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("bins", selectedValues.value)
    var bin = [];
    selectedValues?.map((e) => {
      // console.log("map", e?.value);
      // setForm({ ...form, bins: [...form.bins, e?.value] });
      bin.push(e.value);
    });
    // console.log({
    //   ...form,
    //   governorate: selectedValue,
    //   municipale: selectedMunicipal,
    // });

    dispatch(
      AddPointBin({
        ...form,
        bins: bin,
        governorate: selectedValue,
        municipale: selectedMunicipal,
        quoteDemande: idQuote,
      })
    );

    // !error?.success ? showErrorToastMessage() : null

    // showToastMessage()
    setSelectedBins([]);
    e.target.reset();
  };

  useEffect(() => {
    axios
      .get(`https://xgenboxv2.onrender.com/api/governorates`)
      .then((res) => {
        setgovernorates(res.data[0]);
      })
      .catch((err) => {});
  }, []);

  const municipales = governorates?.governorates?.filter(
    (item, index) => item.name === selectedValue
  );

  const colourOptions = [];

  ListOfBinsNotInUse?.map((e) => {
    colourOptions.push({ value: e._id, label: e.type });
  });

  // Handle onChange event

  // console.log("SelectedValues", selectedValues)
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={profile?.avatar}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

              </CardHeader>
              <CardBody className="pt-0 pt-md-4">

                <div className="text-center mt-md-5">
                  <h3>
                  {user?.name}

                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {profile?. address}, {profile?.city}, {profile?.country}
                  </div>

                  <hr className="my-4" />
                  <p>
                    {profile?.Bio}
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col className="order-xl-1" xl="11">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Point bin</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to={`/admin/AddBin`}>
                      <Button
                        // color="primary"

                        size="md"
                      >
                        {" "}
                        create bin
                        <i className=" ml-2 fas fa-arrow-right" />
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <form
                  onSubmit={onSubmit}
                  style={{
                    padding: "20px",
                    // border:"1px solid #ccc",
                    borderRadius: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 20,
                    // display: 'flex',
                  }}
                >
                  <ToastContainer />
                  <Row>
                    <Col md="6">
                      <div className=" mb-3">
                        <label className="form-label">
                          Governorate<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
                          <select
                            name={"governorate"}
                            required
                            defaultValue={selectedValue}
                            className={classNames("form-control")}
                            onChange={(e) => setSelectedValue(e.target.value)}
                          >
                            {governorates?.governorates?.map((gov, index) => (
                              <option key={index} value={gov._id}>
                                {gov.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className=" mb-3">
                        <label className="form-label">
                          Municipal<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
                          <select
                            name={"municipal"}
                            required
                            defaultValue={selectedMunicipal}
                            className={classNames("form-control")}
                            onChange={(e) => setMunicipal(e.target.value)}
                          >
                            <option value="">---select municipal---</option>

                            {municipales &&
                              municipales[0]?.municipalities?.map(
                                (municipal, index) => (
                                  <option key={index} value={municipal._id}>
                                    {municipal}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className=" mb-3">
                        <label className="form-label">
                          address <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            required
                            name={"address"}
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
                  <Row>
                    <Col md="6">
                      <div className=" mb-3">
                        <label className="form-label">
                          latitude <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            required
                            name={"lat"}
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
                      <div className=" mb-">
                        <label className="form-label">
                          Longitude<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            required
                            name={"long"}
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
                    {/* <Col
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Job Title</label>
      <div className="input-group">

        <input type="text"  name={"jobTitle"} className={classNames("form-control")} onChange={onChangeHandler}/>

      </div>
    </div>
    </Col> */}
                  </Row>
                  <Row>
                    {/* <Col
    md="12"
    >
       <div className=" mb-3">
      <label className="form-label">Quote request<span style={{color:"red"}}>*</span></label>
      <div className="input-group">



      <select name={"quoteDemande"} required className={classNames("form-control")} onChange={onChangeHandler}>

            <option value={""}>--Select Quote request ---</option>
            {
              ListOfQuote?.map(l=>{
                return(
                  <option value={l._id}>{l.name}/ {l.email}/ {l.city}/ {l.country}</option>
                )
              })
            }


      </select>
      </div>
    </div>
    </Col> */}
                  </Row>
                  <hr />
                  <h3>Bins</h3>

                  <Select
                    // closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={colourOptions}
                    onChange={handleSelectChange}
                    required
                    isLoading={colourOptions.length == 0 ? true : false}
                    isDisabled={selectedValues.length > 3 ? true : false}
                  />
                  {selectedValues.length > 3 && (
                    <Button
                      color="info"
                      outline
                      onClick={() => {
                        setSelectedValues([]);
                      }}
                    >
                      Deselect
                    </Button>
                  )}

                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div className=" mb-3">
                        {!error?.success && (
                          <span style={{ color: "red" }}>
                            {error?.success ? "" : error?.error}
                          </span>
                        )}
                        <div>{/* {errors}dfds */}</div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <CButton
                        type="submit"
                        variant="outline"
                        colorScheme="green"
                      >
                        {isLoad ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="visually-hidden"></span>
                          </div>
                        ) : (
                          "Submit"
                        )}

                        <i className="fa-solid fa-floppy-disk"></i>
                      </CButton>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateBinPoint;
