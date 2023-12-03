
import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_QUOTE } from "Redux/types"
import { SET_QUOTE_DETAILS } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"

import axios from "axios"

export const createQuote = (data) => async (dispatch) => {
  try {
      console.log(data);

      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/site/createQuote`, data, {
          headers: { "Content-Type": "multipart/form-data" }
      });

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

      // Additional logic or dispatch actions if needed after a successful response
  } catch (err) {
      // Handle errors
      // console.log("err in authAction.js line 366", err);
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });
  }
};


export const FetchAllQuote = (data) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/quote/fetchAll`, data);

      // console.log(res)

      dispatch({
          type: SET_QUOTE,
          payload: res.data
      });

      // Additional logic or dispatch actions if needed after a successful response
  } catch (err) {
      // Handle errors
      // console.log("err in authAction.js line 366", err);
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });
  }
};


export const GetQuoteById = (id, navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/quote/fetchByID/${id}`);

      // console.log(res)
      dispatch({
          type: SET_QUOTE_DETAILS,
          payload: res?.data
      });

      // Additional logic or dispatch actions if needed after a successful response
  } catch (err) {
      // Handle errors
      // console.log("err in authAction.js line 366", err);
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });
      // dispatch(registerGoogleUser(data))
  }
};


export const UpdateQuoteStatus = (id, navigation) => async (dispatch) => {
  try {
      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/site/Quote/readed/${id}`);

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

      // Additional logic or dispatch actions if needed after a successful response
  } catch (err) {
      // Handle errors
      // console.log("err in authAction.js line 366", err);
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
      // dispatch(registerGoogleUser(data))
  }
};


export const UpdateQuoteStat = (id, status, navigation) => async (dispatch) => {
  try {
      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/site/quote/Update/${id}`,
          { status: status }
      );

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

      // Additional logic or dispatch actions if needed after a successful response
  } catch (err) {
      // Handle errors
      // console.log("err in authAction.js line 366", err);
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
      // dispatch(registerGoogleUser(data))
  }
};
