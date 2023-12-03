import axios from "axios"
import { SET_ALL_APPOINTMENT, SET_APPOINTMENT, SET_ERRORS, SET_IS_LOADING, SET_IS_SECCESS } from "../types"
import { setLoading } from "./authActions"

export const createAppointment =  (userData, navigation ) => (dispatch) => {
    console.log("action",userData)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/appointment`, userData)
    // http://localhost:4000/api/appointment
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));


                dispatch(setLoading(true));
            }, 1000);
            // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})




        })


        .catch( (err) =>{
            console.log(err)
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
                  })

                  dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                setTimeout(() => {

                    dispatch({
                        type:SET_IS_SECCESS,
                        payload:false
                    })
                }, 3000);
            }



        )
}


export const fetchAppointmentByUser = ()=>(dispatch)=> {
    dispatch({
      type: SET_ERRORS,
      payload: []
  })

    axios.get(`${process.env.REACT_APP_API_URL}/api/appointment/findAppointmens`)
    .then(async(res) => {

      dispatch({
        type: SET_APPOINTMENT,
        payload: res.data
      })
        dispatch({
            type: SET_ERRORS,
            payload: {}
        })
        dispatch({
          type: SET_ERRORS,
          payload: []
      })



    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err?.response?.data
      })

    }
    )

  }

  export const fetchAllAppointment = ()=>(dispatch)=> {
    dispatch({
      type: SET_ERRORS,
      payload: []
  })

    axios.get(`${process.env.REACT_APP_API_URL}/api/appointment/findAllAppointmens`)
    .then(async(res) => {

      dispatch({
        type: SET_ALL_APPOINTMENT,
        payload: res.data
      })
        dispatch({
            type: SET_ERRORS,
            payload: {}
        })
        dispatch({
          type: SET_ERRORS,
          payload: []
      })



    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err?.response?.data
      })

    }
    )

  }