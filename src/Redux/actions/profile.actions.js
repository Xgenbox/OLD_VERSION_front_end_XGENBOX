import axios from "axios";
import { SET_ERRORS, SET_IS_LOADING, SET_PROFILES } from "../types";
import { setLoading } from "./authActions";







export const AddProfile = (userData, navigation) => async (dispatch) => {
  try {
      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/profile/upload-profile`, userData, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
              // 'Authorization': 'Bearer ' + token
          }
      });

      dispatch({
          type: SET_PROFILES,
          payload: res.data
      });

      dispatch(setLoading(true));

      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      setTimeout(() => {
          dispatch(setLoading(false));
      }, 3000);
  } catch (err) {
      // Handle errors
      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      setTimeout(() => {
          dispatch(setLoading(false));
      }, 3000);
  }
};


export const GetProfile = () => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile`);

      dispatch({
          type: SET_PROFILES,
          payload: res.data
      });
  } catch (err) {
      // Handle errors
      // console.log(err)
      // Dispatch any error-related actions if needed
  }
};
