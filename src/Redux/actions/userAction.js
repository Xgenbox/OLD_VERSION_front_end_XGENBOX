
import { SET_ERRORS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_CURRENT_ACCESS_LIST } from "Redux/types"
import { SET_SOME_ACCESS_LIST_USERS } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_USERS_DETAILS } from "Redux/types"
import { SET_USERS } from "Redux/types"

import axios from "axios"

export const GetAllUsers = (navigation) => (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/users/getUsers`)
        .then((res) => {
          // //(res)
          dispatch({
            type: SET_USERS,
            payload: res?.data,
          });
        })
        .catch((err) => {
          // //("err in authAction.js line 366",err)
          dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data,
          });
        });
    } catch (error) {
      console.error("An error occurred in GetAllUsers action:", error);
      // You can dispatch an error action or handle the error as needed
    }
  };


  export const GetAllUserDetails = (id, navigation) => (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
        .then((res) => {
          // //(res)
          dispatch({
            type: SET_USERS_DETAILS,
            payload: res?.data,
          });
        })
        .catch((err) => {
          // //("err in authAction.js line 366",err)
          dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data,
          });
        });
    } catch (error) {
      console.error("An error occurred in GetAllUserDetails action:", error);
      // You can dispatch an error action or handle the error as needed
    }
  };



  export const BlockUser = (id,navigation)=>dispatch=>{
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/block/${id}`)
    .then(res => {
        // //(res)

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
        // //("err in authAction.js line 366",err)
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
  export const UnBlockUser = (id,navigation)=>dispatch=>{
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/deblock/${id}`)
    .then(res => {
        //(res)


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
        // //("err in authAction.js line 366",err)
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
  export const GetCurrentAccessList =  () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/access/getCurrentAccessList`)
        .then(async(res) => {
          // //("ligne 6",res.data?.accessList)

          dispatch({
            type: SET_CURRENT_ACCESS_LIST,
            payload: res.data?.accessList
          })

        dispatch({
          type:SET_IS_SECCESS,
          payload:true
        })
        })
        .catch( (err) =>{
          // //(err)
        // dispatch({
        //   type: SET_PROFILES,
        //   payload: res.data

        // })
      }

        )
  }
  export const GetAllusersWhoHaveAtLeastOneSameAccessCode =() => (dispatch)=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/access/getAllUserWhoHasASameAccessBin`)
        .then(async(res) => {
          // //("ligne 6",res.data?.accessList)

          dispatch({
            type: SET_SOME_ACCESS_LIST_USERS,
            payload: res.data
          })
        })
        .catch( (err) =>{
          // //(err)
        // dispatch({
        //   type: SET_PROFILES,
        //   payload: res.data

        // })
      }

        )
  }




