import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_PARTNER_DETAILS } from "Redux/types"
import { SET_PARTNERSHIP_LIST } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const CreatePartership = (data) => async (dispatch) => {
  try {
      dispatch({
          type: SET_ERRORS,
          payload: []
      });
      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/site/Addpartnership`, data);

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

  } catch (err) {
      // Handle errors
      // For example, you may want to dispatch an action to set an error state.
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });

      // You can add more error handling logic here if needed.
  }
};



export const FetchAllPartnership = (data) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/fetchAll`, data);

      console.log(res);

      dispatch({
          type: SET_PARTNERSHIP_LIST,
          payload: res.data
      });

  } catch (err) {
      // Handle errors
      // For example, you may want to dispatch an action to set an error state.
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // });

      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      dispatch({
          type: SET_IS_SECCESS,
          payload: false
      });

      // You can add more error handling logic here if needed.
  }
};


export const GetPartnerDetailsById = (id, navigation) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/fetchByID/${id}`);

      // console.log(res)
      dispatch({
          type: SET_PARTNER_DETAILS,
          payload: res?.data
      });

  } catch (err) {
      // Handle errors
      // For example, you may want to dispatch an action to set an error state.
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // });

      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      });

      // You can add more error handling logic here if needed.
  }
};



export const UpdatePartnerShipStatus = (id, navigation) => async (dispatch) => {
  try {
      dispatch({
          type: SET_ERRORS,
          payload: []
      });

      dispatch({
          type: SET_IS_LOADING,
          payload: true
      });

      const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/readed/${id}`);

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
      // Handle errors
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
