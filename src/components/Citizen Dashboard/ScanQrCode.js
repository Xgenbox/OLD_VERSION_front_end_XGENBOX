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
import {QrScanner} from '@yudiel/react-qr-scanner';
import { AddToWaste } from "Redux/actions/medicineAction";
import { useHistory } from 'react-router-dom';
import { openBin } from "Redux/actions/binActions";

  const ScanQrCode = () => {
    const { id } = useParams();
    const profile = useSelector(state=>state?.profile?.profile)
    const error = useSelector(state=>state.error?.errors)
      const [selectedMunicipal, setMunicipal] = useState('');
      const medicineDetails = useSelector(state=>state?.MedicineDetails?.MedicineDetails)
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
    const isSuccess = useSelector(state=>state?.success?.success)
    const dispatch = useDispatch()
    const navigate = useHistory();

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

// console.log(error)



const showToastMessageError = () => {
  toast.error('Access deny', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 200,
  });
}
    const showToastMessage = () => {
      toast.success('Medicine Added to Waste successfully.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 200,
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
    useEffect(() => {
      if (error.message== "Access denied") {

        showToastMessageError()
      }
    }, [error])
    // console.log(error)

    const onSubmit = (e)=>{

      e.preventDefault();
      // console.log({...form, governorate: selectedValue, municipale: selectedMunicipal})
    // dispatch(UpdateMedicine(id,{...form}))

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
                      <h3 className="mb-0">Scan QR code</h3>

                      <h6>
                      Scan the QR Code displayed on the SmartBin to claim the Rewards
                      </h6>
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
    <QrScanner
          onDecode={(result) => dispatch(openBin(result, navigate)) }
          onError={(error) => console.log(error?.message)}
          style={{ width: '100%',
          height: '100%',
           }}
           scanDelay={3000}
      />
    <Row>
      <Col
      md="12"
      >
         {/* <div className=" mb-3">
        <label className="form-label">Name<span style={{color:"red"}}>*</span></label>
        <div className="input-group">

          <input type="text" required defaultValue={medicineDetails?.name}  name={"name"} className={classNames("form-control")} onChange={onChangeHandler}/>

        </div>
      </div> */}
      </Col>


    </Row>
    <ToastContainer />












  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  export default ScanQrCode;
