import { SET_IS_LOADING } from "Redux/types"
import { SET_BINS_LIST } from "Redux/types"
import { SET_POINT_BINS } from "Redux/types"
import { SET_POINTBIN_DETAILS } from "Redux/types"
import { SET_ALL_POINT_BINS } from "Redux/types"
import { SET_BINS } from "Redux/types"
import { SET_ALL_BINS_ } from "Redux/types"
import { SET_BIN_DETAILS } from "Redux/types"
import { SET_BINS_LIST_NOT_IN_POINT_BIN } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import axios from "axios"

export const AddBin = (data) => async (dispatch) => {
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
        `${process.env.REACT_APP_API_URL}/api/bin/createBin`,
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

  export const FetchAllBins = (data) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bin/FetchAllBins`,
        data
      );

      dispatch({
        type: SET_BINS_LIST,
        payload: response.data,
      });

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

      // Additional error handling or dispatch can be added here if needed.
    }
  };
  export const UpdateBinStatus = (id, navigation) => async (dispatch) => {
    try {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_IS_LOADING,
        payload: true,
      });

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/bin/updateStatus/${id}`
      );

      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      setTimeout(() => {
        dispatch({
          type: SET_IS_LOADING,
          payload: false,
        });
      }, 3000);

      dispatch({
        type: SET_IS_SECCESS,
        payload: true,
      });

      setTimeout(() => {
        dispatch({
          type: SET_IS_SECCESS,
          payload: false,
        });
      }, 1000);

      // Additional logic or dispatch can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_IS_LOADING,
        payload: false,
      });

      dispatch({
        type: SET_IS_SECCESS,
        payload: false,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const FetchAllBinsNotInUse = (data) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bin/FetchAllBinsNotInPointBin`,
        data
      );

      dispatch({
        type: SET_BINS_LIST_NOT_IN_POINT_BIN,
        payload: response.data,
      });

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

      // Additional error handling or dispatch can be added here if needed.
    }
  };


  export const AddPointBin = (data) => async (dispatch) => {
    dispatch({
      type: SET_ERRORS,
      payload: [],
    });

    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/CreatePointBin`,
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
  export const FetchAllPointBins = (data) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bin/fetchAllPointBins`,
        data
      );

      dispatch({
        type: SET_POINT_BINS,
        payload: response.data,
      });

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

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const FetchBinByID = (data) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bin/fetchBinByID/${data}`
      );

      dispatch({
        type: SET_BIN_DETAILS,
        payload: response.data,
      });

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

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const DeleteBinByID = (id) => async (dispatch) => {
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
        `${process.env.REACT_APP_API_URL}/api/bin/deleteBinById/${id}`
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


  export const updateBin = (id, data) => async (dispatch) => {
    dispatch({
      type: SET_ERRORS,
      payload: [],
    });
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/bin/updateBin/${id}`,
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


  export const DeletePointBinByID = (id) => async (dispatch) => {
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
        `${process.env.REACT_APP_API_URL}/api/Pointbin/deletePointBinById/${id}`
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

  export const FetchPointBinByID = (data) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/fetchPointBinByID/${data}`
      );

      dispatch({
        type: SET_POINTBIN_DETAILS,
        payload: response.data,
      });

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

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const DeletePointBinByIDFromPointBin = (binId, pointBinId) => async (
    dispatch
  ) => {
    dispatch({
      type: SET_ERRORS,
      payload: [],
    });
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/deleteBinFromPointBin/${pointBinId}/${binId}`
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
      dispatch({
        type: SET_IS_SECCESS,
        payload: false,
      });

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

  export const updatePointBin = (id, data) => async (dispatch) => {
    dispatch({
      type: SET_ERRORS,
      payload: [],
    });
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/UpdatePointBin/${id}`,
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

  export const fetchBin = (municipal) => async (dispatch) => {
    try {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bin/FetchBinsNotInPointBins`
      );

      dispatch({
        type: SET_ALL_BINS_,
        payload: response.data,
      });
      dispatch({
        type: SET_ERRORS,
        payload: {},
      });
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      // Additional logic or dispatch can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error?.response?.data,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const fetchPointBin = (municipal) => async (dispatch) => {
    try {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/fetchAllPointBin`
      );

      dispatch({
        type: SET_ALL_POINT_BINS,
        payload: response.data,
      });
      dispatch({
        type: SET_ERRORS,
        payload: {},
      });
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      // Additional logic or dispatch can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error?.response?.data,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };

  export const fetchPointBinAll = () => async (dispatch) => {
    try {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Pointbin/fetchAllPointBin`
      );

      dispatch({
        type: SET_BINS,
        payload: response.data,
      });
      dispatch({
        type: SET_ERRORS,
        payload: {},
      });
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });

      // Additional logic or dispatch can be added here if needed.

    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error?.response?.data,
      });

      // Additional error handling or dispatch can be added here if needed.
    }
  };