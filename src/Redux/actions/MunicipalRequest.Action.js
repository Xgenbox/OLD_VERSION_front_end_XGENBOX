import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_DETAILS_MUNICIPAL } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const findDemandeInProgress = (navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/demande-municipal/findDemandeInProgress`);

      console.log(res);

      dispatch({
          type: SET_DEMANDES_MUNICIPAL,
          payload: res?.data
      });

      // You can add more dispatch or navigation logic here if needed.

  } catch (err) {
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      // Handle navigation or additional logic for error if needed.
  }
};


export const UpadeteRequest = (data, navigation) => async (dispatch) => {
  try {
      // console.log(data);
      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/demande-municipal/AcceptDemande/${data.id}`,
          { status: data.status }
      );

      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      // You can dispatch additional actions or update state as needed.
      // For example:
      // dispatch({
      //     type: SET_DEMANDES_MUNICIPAL,
      //     payload: res.data
      // });

  } catch (err) {
      // Handle errors
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: false
      });

      // You can add more error handling logic here if needed.
  }
};

export const getBinsCount = (navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/bin/getBinsCount`);

      dispatch({
          type: SET_BIN_STATISTIQUES,
          payload: res?.data
      });

  } catch (err) {
      // Handle errors
      // For example, you may want to dispatch an action to set an error state.
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // });

      // You can add more error handling logic here if needed.
  }
};


export const GetPMunicipalDetailsById = (id, navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/demande-municipal/findDemandeById/${id}`);

      dispatch({
          type: SET_DETAILS_MUNICIPAL,
          payload: res?.data
      });

  } catch (err) {
      // Handle errors
      // For example, you may want to dispatch an action to set an error state.
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // });

      // You can add more error handling logic here if needed.
  }
};

