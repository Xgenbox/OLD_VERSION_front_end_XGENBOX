import axios from "axios"
import { SET_DEMANDES_MUNICIPAL, SET_ERRORS, SET_IS_LOADING, SET_IS_SECCESS, SET_REQUEST, SET_REQUESTS_CLEANING, SET_REQUESTS_SENT } from "../types"
// import { createAccess } from "./accessAction"





export const findDemandeInProgress = ( navigation)=> (dispatch) => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/demande-municipal/findDemandeInProgress`)
  .then(async(res) => {
    // //(">>>>>>>>>>>>>>>>>>>",res.data)
    dispatch({
      type: SET_DEMANDES_MUNICIPAL,
      payload: res.data,

    })

  })


  .catch( (err) =>{

         dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data
          })
      }



  )

}


export const FinishCleaningRequest = (data, navigation)=> (dispatch) => {
  // //(data)
  axios.put(`${process.env.REACT_APP_API_URL}/api/cleaning/AcceptCleaningRequestMunicipal/${data}`

  )
  .then(async(res) => {
    // //(res.data)
    // //(">>>>>>>>>>>>>>>>>>> ligne 41: ",res.data?.data?.user)
    // dispatch({
    //   type: SET_DEMANDES_MUNICIPAL,
    //   payload: res.data,

    // })
    // dispatch(createAccess({companyId: res.data?.data?.user}))

  })


  .catch( (err) =>{

         dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data
          })
      }



  )

}

export const findSingleCleaningService =  () => (dispatch) => {
  // //("send requset")
  axios.get(`${process.env.REACT_APP_API_URL}/api/cleaning/findSingleCleaningService`)
      .then(async(res) => {
        // //("demande action:",res.data)
        dispatch({
          type: SET_REQUESTS_SENT,
          payload: res.data

        })
      })
      .catch( (err) =>{
      dispatch({
        type: SET_ERRORS,
        payload: err

      })
    }

      )
}
export const findDemandeInProgressMunicipal =  () => (dispatch) => {
  // //("send requset")
  axios.get(`${process.env.REACT_APP_API_URL}/api/cleaning/findDemandeInProgressMunicipal`)
      .then(async(res) => {
        // //("demande action:",res.data)
        dispatch({
          type: SET_REQUESTS_CLEANING,
          payload: res.data

        })
      })
      .catch( (err) =>{
      dispatch({
        type: SET_ERRORS,
        payload: err

      })
    }

      )
}


export const DeleteRequestCleaningService =  (data) => (dispatch) => {
  // //("send requset")
  axios.delete(`${process.env.REACT_APP_API_URL}/api/cleaning/delete/${data.requestId}`)
      .then(async(res) => {
        // //("delete action:",res.data)

      })
      .catch( (err) =>{
      dispatch({
        type: SET_ERRORS,
        payload: err

      })
    }

      )
}

export const CreateRequestCleaning =  (userData, navigation ) => (dispatch) => {
  dispatch({
    type:SET_IS_LOADING,
    payload:true
})
dispatch({
  type:SET_IS_SECCESS,
  payload:false
})
  axios.post(`${process.env.REACT_APP_API_URL}/api/cleaning`, userData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
      // 'Authorization': 'Bearer ' + token
    }

  })
      .then(async(res) => {
        // //(res)

        dispatch({
          type:SET_IS_LOADING,
          payload:false
      })

      dispatch({
        type:SET_IS_SECCESS,
        payload:true
      })

      setTimeout(() => {
        dispatch({
          type:SET_IS_SECCESS,
          payload:false
        })
      }, 5000);
      })
      .catch( (err) =>{
        //(err)

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
      }

      )
}

