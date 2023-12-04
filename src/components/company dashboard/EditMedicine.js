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
    Col
  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
  import { useDispatch, useSelector } from "react-redux";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useEffect, useState } from "react";
  import axios from "axios";
  import classNames from "classnames";
  import { AddBin } from "Redux/actions/BinAction";
  import { SET_IS_SECCESS } from "Redux/types";
  import {Link} from "react-router-dom"
  import { FetchBinByID } from "Redux/actions/BinAction";
  import { useParams } from "react-router-dom";
  import { updateBin } from "Redux/actions/BinAction";
import { GetMedicineById } from "Redux/actions/medicineAction";
import { SET_ERRORS } from "Redux/types";
import { UpdateMedicine } from "Redux/actions/medicineAction";
  const EditMedicine = () => {
    const { id } = useParams();
    const profile = useSelector(state=>state?.profile?.profile)
    const error = useSelector(state=>state.error?.errors)
      const [selectedMunicipal, setMunicipal] = useState('');
      const medicineDetails = useSelector(state=>state?.MedicineDetails?.MedicineDetails)
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
    const isSuccess = useSelector(state=>state?.success?.success)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetMedicineById(id))
     }, [medicineDetails])
    dispatch({
      type:SET_IS_SECCESS,
      payload:false
  })
//   dispatch({
//     type:SET_ERRORS,
//     payload:{}
// })






    const showToastMessage = () => {
      toast.success('Medicine Updated successfully.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
      });
    }






    const [form, setForm] = useState({
    })

    const onChangeHandler = (e) => {
      const { name, checked, value } = e.target;


        setForm({
          ...form,
          [name]: value
        });


    };
    useEffect(() => {
      if (isSuccess) {

        showToastMessage()
      }
    }, [isSuccess])

    const onSubmit = (e)=>{

      e.preventDefault();
      // console.log({...form, governorate: selectedValue, municipale: selectedMunicipal})
    dispatch(UpdateMedicine(id,{...form}))

    // !error?.success ? showErrorToastMessage() : null




        // showToastMessage()

        e.target.reset();


    }
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>

            <Col className="order-xl-1" xl="11">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Update Medicine</h3>
                    </Col>

                  </Row>
                </CardHeader>
                <CardBody>
                <form onSubmit={onSubmit}
  style={
    {
      padding:"20px",
      // border:"1px solid #ccc",
      borderRadius:"5px",
      justifyContent: 'center',
      alignItems: 'center',
      margin:20
      // display: 'flex',
    }

  }
  >
    <Row>
      <Col
      md="12"
      >
         <div className=" mb-3">
        <label className="form-label">Name<span style={{color:"red"}}>*</span></label>
        <div className="input-group">

          <input type="text" required defaultValue={medicineDetails?.name}  name={"name"} className={classNames("form-control")} onChange={onChangeHandler}/>
          {/* {
            errors && (<div  className="invalid-feedback">
            {errors}
          </div>)
          } */}
        </div>
      </div>
      </Col>


    </Row>
    <ToastContainer />




    <Row>
      <Col
      md="4"
      >
         <div className=" mb-3">
        {
            !error?.success && (<span style={{color:"red"}}>
  {error?.success ? "" : error?.error}
            </span>)
          }
          <div   >
            {/* {errors}dfds */}
          </div>
      </div>
      </Col>

    </Row>






    <Row>
      <Col>
      <button type="submit" className="btn btn-outline-primary">
      {isLoad ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden"></span>
          </div>
        ) : (
          'Update'
        )}

                    <i className="fa-solid fa-floppy-disk"></i>
                  </button></Col>
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

  export default EditMedicine;
