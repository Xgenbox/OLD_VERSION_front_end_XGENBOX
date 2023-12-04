import { SET_IS_LOADING } from "Redux/types";
import { SET_ALL_MEDICINE } from "Redux/types";
import { SET_DETAILS_MEDICINE } from "Redux/types";
import { SET_IS_SECCESS } from "Redux/types";
import { SET_ERRORS } from "Redux/types";
import axios from "axios";

export const AddMedicine = (data) => async (dispatch) => {
    try {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: true,
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/addmedicine`,
        data
      );

      dispatch({
        type: SET_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: false,
      });

      dispatch({
        type: SET_IS_SECCESS,
        payload: true,
      });

      setTimeout(() => {
        dispatch({
          type: SET_IS_SECCESS,
          payload: false,
        });
      }, 3000);

      // Additional dispatch or logic can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error?.response?.data,
      });
      dispatch({
        type: SET_IS_SECCESS,
        payload: false,
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: false,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };


export const GetAllMedicine = (navigation) => (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/users/fetchMedicineByUserId`)
        .then((res) => {
          // console.log(res)
          dispatch({
            type: SET_ALL_MEDICINE,
            payload: res?.data,
          });
        })
        .catch((err) => {
          // console.log("err in authAction.js line 366",err)
          dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data,
          });
        });
    } catch (error) {
      console.error("An error occurred in Get All Medicine  action:", error);
      // You can dispatch an error action or handle the error as needed
    }
  };


  export const GetMedicineById = (id) => (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/users/fetchMedicineByid/${id}`)
        .then((res) => {
          // console.log(res)
          dispatch({
            type: SET_DETAILS_MEDICINE,
            payload: res?.data,
          });
        })
        .catch((err) => {
          // console.log("err in authAction.js line 366",err)
          dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data,
          });
        });
    } catch (error) {
      console.error("An error occurred in Get one Medicine  action:", error);
      // You can dispatch an error action or handle the error as needed
    }
  };

  export const UpdateMedicine = (id,data)=>dispatch=>{
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/updateMedicine/${id}`,
    data
    )
    .then(res => {
        // console.log(res)

        dispatch({
            type: SET_ERRORS,
            payload: []
        })
        setTimeout(() => {

            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        }, 1000);
        dispatch({
            type:SET_IS_SECCESS,
            payload:true
        })
        setTimeout(() => {
            dispatch({
              type:SET_IS_SECCESS,
              payload:false
          })
          }, 3000);

        // dispatch(registerGoogleUser(data))

        // dispatch(loginUser(data))
    })
    .catch(err =>
       {
        // console.log("err in authAction.js line 366",err)
        dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data
        })



            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })

        dispatch({
            type:SET_IS_SECCESS,
            payload:false
        })
        // dispatch(registerGoogleUser(data))
    }
    )
  }

  export const DeleteMedicineByID = (id) => async (dispatch) => {
    dispatch({
      type: SET_ERRORS,
      payload: [],
    });
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });

    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/users/deleteMedicine/${id}`
      );

      dispatch({
        type: SET_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: false,
      });
      dispatch({
        type: SET_IS_SECCESS,
        payload: true,
      });

      setTimeout(() => {
        dispatch({
          type: SET_IS_SECCESS,
          payload: false,
        });
      }, 3000);

      // Additional logic or dispatch can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error?.response?.data,
      });
      dispatch({
        type: SET_IS_SECCESS,
        payload: false,
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: false,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };
