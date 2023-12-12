import axios from 'axios'
import { SET_ALL_BINS, SET_BINS, SET_BINS_BY_MUNICIPAL, SET_CURRENT_ACCESS, SET_EMAIL_SENT, SET_ERRORS, SET_IS_LOADING, SET_IS_SECCESS, SET_LOADING, SET_NOT_SUCCESS, SET_PROFILES, SET_REQUEST, SET_USER, SET_VALID, SET_VERIFIED } from '../types'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { SetAuthToken } from '../../utils/SetAuthToken';
import { setLoading } from './authActions';
// import { $CombinedState } from 'redux';
import { AddScore } from './scoreAction';



export const createAccess =  (userData, navigation ) => (dispatch) => {
    // //(userData)
    dispatch({
      type:SET_IS_LOADING,
      payload:true
  })
  dispatch({
    type:SET_IS_SECCESS,
    payload:false
  })



    axios.post(`${process.env.REACT_APP_API_URL}/api/access/createAccess`, userData)
        .then(async(res) => {
            dispatch({
                type: SET_ERRORS,
                payload: {}
            })
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
            }, 3000);
        })


        .catch( (err) =>{
            // //(err)
            setTimeout(() => {
                // Make API call or other asynchronous operation

                dispatch(setLoading(false));
              }, 2000);
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

export const GetCurrentAccess =  () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/access/currentAccess`)
      .then(async(res) => {
        // //("ligne 51",res.data)

        dispatch({
          type: SET_CURRENT_ACCESS,
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

export const getAllBins = ()=>(dispatch)=> {
  axios.get(`${process.env.REACT_APP_API_URL}/api/bin/getAllBins`)
  .then(async(res) => {
    // //("ligne 51",res.data)

    dispatch({
      type: SET_ALL_BINS,
      payload: res.data
    })
  }
  )
  .catch( (err) =>{
    // //(err)
  // dispatch({

  //   type: SET_PROFILES,
  //   payload: res.data

  // })
  })
}

export const addAccessCode = (code)=>(dispatch)=> {

  // //("ligne 92",code)
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
dispatch({
  type:SET_IS_SECCESS,
  payload:false
})
dispatch({
  type:SET_NOT_SUCCESS,
  payload:false
})

    axios.put(`${process.env.REACT_APP_API_URL}/api/users/access/addAccess`, {code})
        .then(async(res) => {
            dispatch({
                type: SET_ERRORS,
                payload: {}
            })
            // //(res)
            dispatch({
              type: SET_ERRORS,
              payload: {}
          })
          // //(res)

          dispatch({
            type: SET_ERRORS,
            payload: []
        })
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

          // navigation.navigate('Dashboard');
        }, 2900);
        setTimeout(() => {
          dispatch({
            type:SET_IS_SECCESS,
            payload:false
          })

          // navigation.navigate('Dashboard');
        }, 3000);

        setTimeout(() => {
          dispatch({
            type:SET_IS_SECCESS,
            payload:false
          })

        }, 3000);



            // navigation.navigate('Dashboard');





        })


        .catch( (err) =>{
            // //(err)
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
            dispatch({
              type:SET_NOT_SUCCESS,
              payload:true
            })
            setTimeout(() => {
              dispatch({
                type:SET_NOT_SUCCESS,
                payload:false
              })

            }, 2900);
            setTimeout(() => {
              dispatch({
                type:SET_NOT_SUCCESS,
                payload:false
              })
              // navigation.navigate('Dashboard')
            }, 5000);

            }



        )
}

export const openBin = (idBin, navigate)=>(dispatch)=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
dispatch({
  type:SET_IS_SECCESS,
  payload:false
})
dispatch({
  type:SET_NOT_SUCCESS,
  payload:false
})

  axios.put(`${process.env.REACT_APP_API_URL}/api/bin/openBin/${idBin}`)
  .then(async(res) => {
    dispatch(AddScore())
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      // //(res)

      dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
      type:SET_IS_SECCESS,
      payload:true
    })
    dispatch({
      type:SET_IS_LOADING,
      payload:false
    })

    setTimeout(() => {
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
      })

      // navigation.navigate('Dashboard');
    }, 4000);
    setTimeout(() => {
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
      })

      // navigation.navigate('Dashboard');
    }, 4100);

    setTimeout(() => {
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
      })

    }, 3000);

    navigate.push('/citizen/index');

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
          dispatch({
            type:SET_NOT_SUCCESS,
            payload:true
          })
          setTimeout(() => {
            dispatch({
              type:SET_NOT_SUCCESS,
              payload:false
            })

          }, 2900);
          setTimeout(() => {
            dispatch({
              type:SET_NOT_SUCCESS,
              payload:false
            })
            // navigation.navigate('Dashboard')
          }, 3000);
      }



  )

}

export const fetchBins = ()=>dispatch=> {

  axios.get(`${process.env.REACT_APP_API_URL}/api/bin/fetchAllPointBinsAndHerBinsByUserId`)
  .then(async(res) => {
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      dispatch({
        type: SET_BINS,
        payload: res.data
      })
      // //(res)


  })


  .catch( (err) =>{

    dispatch({
      type: SET_ERRORS,
      payload: err?.response?.data
    })
      }



  )

}
export const fetchBins1 = ()=>dispatch=> {

  axios.get(`${process.env.REACT_APP_API_URL}/api/bin/fetchAllPointBins`)
  .then(async(res) => {
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      dispatch({
        type: SET_BINS,
        payload: res.data
      })
      // //(res)


  })


  .catch( (err) =>{

    dispatch({
      type: SET_ERRORS,
      payload: err?.response?.data
    })
      }



  )

}

export const fetchPointBinByMunicipal = (municipal)=>(dispatch)=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})

  axios.get(`${process.env.REACT_APP_API_URL}/api/Pointbin/fetchPointBinByMunicipal/${municipal}`)
  .then(async(res) => {

    dispatch({
      type: SET_BINS,
      payload: res.data
    })
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      dispatch({
        type: SET_ERRORS,
        payload: []
    })



  })
  .catch((err) => {
    dispatch({
      type: SET_ERRORS,
      payload: err?.response?.data
    })

  }
  )

}

export const fetchBinByMunicipal = (municipal)=>(dispatch)=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})

  axios.get(`${process.env.REACT_APP_API_URL}/api/bin/FetchBinsNotInPointBinByMunicipal/${municipal}`)
  .then(async(res) => {
    // //(res.data)

    dispatch({
      type: SET_BINS_BY_MUNICIPAL,
      payload: res.data
    })
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      dispatch({
        type: SET_ERRORS,
        payload: []
    })


  })
  .catch((err) => {
    dispatch({
      type: SET_ERRORS,
      payload: err?.response?.data
    })

  }
  )

}

export const fetchPointBinAll = ()=>(dispatch)=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})

  axios.get(`${process.env.REACT_APP_API_URL}/api/Pointbin/fetchAllPointBin`)
  .then(async(res) => {

    dispatch({
      type: SET_BINS,
      payload: res.data
    })
      dispatch({
          type: SET_ERRORS,
          payload: {}
      })
      dispatch({
        type: SET_ERRORS,
        payload: []
    })



  })
  .catch((err) => {
    dispatch({
      type: SET_ERRORS,
      payload: err?.response?.data
    })

  }
  )

}