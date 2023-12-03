import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const getUsersCounts = (navigation) => (dispatch) => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUserCounts`)
        .then((res) => {
          dispatch({
            type: SET_STATISTIQUES,
            payload: res?.data
          });
        })
        .catch((err) => {
          // Handle specific error cases if needed
          // For example:
          // if (err?.response?.status === 404) {
          //   // Handle 404 error
          //   dispatch({
          //     type: SET_ERRORS,
          //     payload: "Not Found"
          //   });
          // } else {
          //   // Handle other errors
          //   dispatch({
          //     type: SET_ERRORS,
          //     payload: "An error occurred"
          //   });
          // }

          // You can also rethrow the error if you want it to be caught by an outer catch block
          throw err;
        });
    } catch (error) {
      // Handle any synchronous errors here
      console.error("An error occurred synchronously:", error);
    }
  };



  export const getBinsCount = (navigation) => async (dispatch) => {
    try {
        // Make the API request
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/bin/getBinsCount`);

        // Dispatch the action with the data from the response
        dispatch({
            type: SET_BIN_STATISTIQUES,
            payload: res?.data
        });

        // Additional logic or dispatch actions if needed after a successful response
        // For example:
        // dispatch(someOtherAction(res.data.someValue));
    } catch (err) {
        // Handle errors
        // console.log("err in authAction.js line 366", err);
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: err?.response?.data
        // });
        // dispatch(registerGoogleUser(data))
    }
};
