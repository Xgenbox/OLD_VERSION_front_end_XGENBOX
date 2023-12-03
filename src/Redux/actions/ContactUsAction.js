import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_CONTACT_LIST } from "Redux/types"
import { SET_CONTACT_DETAIL } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"

import axios from "axios"

export const CreateContactUs = (data) => async (dispatch) => {
  try {
      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/site/AddContactUs`, data);

      console.log(res);

      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: true
      });

      setTimeout(() => {
          dispatch({
              type: SET_IS_SECCESS,
              payload: false
          });
      }, 3000);

      // dispatch(registerGoogleUser(data))
      // dispatch(loginUser(data))
  } catch (err) {
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      // dispatch(registerGoogleUser(data))
  }
};


export const FetchAllContact = (data) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/contactUs/fetchAll`, data);

      console.log(res);

      dispatch({
          type: SET_CONTACT_LIST,
          payload: res.data
      });

      // dispatch(registerGoogleUser(data))
      // dispatch(loginUser(data))
  } catch (err) {
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });

      // dispatch(registerGoogleUser(data))
  }
};


export const GetContactUsById = (id, navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/contactUs/fetchByID/${id}`);

      // console.log(res)
      dispatch({
          type: SET_CONTACT_DETAIL,
          payload: res?.data
      });

      // dispatch(registerGoogleUser(data))
      // dispatch(loginUser(data))
  } catch (err) {
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      // dispatch(registerGoogleUser(data))
  }
};


export const UpdateContactStatus = (id, navigation) => async (dispatch) => {
  dispatch({
      type: SET_ERRORS,
      payload: []
  });
  dispatch({
      type: SET_IS_LOADING,
      payload: true
  });

  try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/site/contactUs/readed/${id}`);

      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      setTimeout(() => {
          dispatch({
              type: SET_IS_LOADING,
              payload: false
          });
      }, 1000);

      dispatch({
          type: SET_IS_SECCESS,
          payload: true
      });

      setTimeout(() => {
          dispatch({
              type: SET_IS_SECCESS,
              payload: false
          });
      }, 3000);
  } catch (err) {
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });

      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });
  }
};
