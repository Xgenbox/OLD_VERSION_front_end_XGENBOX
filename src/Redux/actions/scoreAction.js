import axios from 'axios'
import {SET_SCORES} from '../types'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { SetAuthToken } from '../../utils/SetAuthToken';
// import { setLoading } from './authActions';



export const AddScore =  (userData, navigation ) => (dispatch) => {
    // console.log(userData)
  //   dispatch({
  //     type:SET_IS_LOADING,
  //     payload:true
  // })
  // dispatch({
  //   type:SET_IS_SECCESS,
  //   payload:false
  // })

    axios.post(`${process.env.REACT_APP_API_URL}/api/score/addScore`)
        .then(async(res) => {
          //   dispatch({
          //       type: SET_ERRORS,
          //       payload: {}
          //   })
          //   // console.log(res)

          //   dispatch({
          //     type:SET_IS_LOADING,
          //     payload:false
          // })
          // dispatch({
          //   type:SET_IS_SECCESS,
          //   payload:true
          // })
          // setTimeout(() => {
          //   dispatch({
          //     type:SET_IS_SECCESS,
          //     payload:false
          //   })
          // }, 3000);




        })


        .catch( (err) =>{
            // console.log(err)
            // setTimeout(() => {
            //     // Make API call or other asynchronous operation

            //     dispatch(setLoading(false));
            //   }, 2000);
            //    dispatch({
            //       type: SET_ERRORS,
            //       payload: err?.response?.data
            //     })

            //     dispatch({
            //       type:SET_IS_LOADING,
            //       payload:false
            //   })
            //   dispatch({
            //     type:SET_IS_SECCESS,
            //     payload:false
            //   })
            }



        )
}

export const fetchScore =  () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/score/findScore`)
      .then(async(res) => {
        // console.log("ligne 51",res.data)

        dispatch({
          type: SET_SCORES,
          payload: res.data
        })
      })
      .catch( (err) =>{
        // console.log(err)
      // dispatch({
      //   type: SET_PROFILES,
      //   payload: res.data

      // })
    }

      )
}

export const CreateScore =  (userData, navigation ) => (dispatch) => {


  axios.post(`${process.env.REACT_APP_API_URL}/api/score/createScore`)
      .then(async(res) => {





      })


      .catch( (err) =>{
          // console.log(err)
          }



      )
}




