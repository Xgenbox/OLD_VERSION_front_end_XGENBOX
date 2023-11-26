import axios from 'axios'
import { SET_CURRENT_ACCESS, SET_ERRORS, SET_IS_LOADING, SET_IS_SECCESS, SET_LOADING, SET_PROFILES, SET_REQUEST, SET_USER } from '../types'


import { SetAuthToken } from '../../utils/SetAuthToken';
import jwt_decode from "jwt-decode"
import { GetProfile } from './profile.actions';


export function setLoading(isLoading) {
    return {
      type: SET_LOADING,
      payload: isLoading,
    };
  }

export const setCurrentUser = (decoded) => {
    return {
        type: SET_USER,
        payload: decoded
    }
}

export const loginUser = (userData) => dispatch => {
    // console.log("--------------userData-----------------------------")
    // console.log("--------------------------------------",userData)
    // console.log("---------------userData----------------------------")
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch(LogOut())
    axios
        .post(`${process.env.REACT_APP_API_URL}/api/users/login`, {email:userData.email, password:userData.password})
        .then(res => {

            const { token } = res.data



            // AsyncStorage.setItem('jwtToken', token)
            localStorage.setItem('jwtToken', token)


            // Set token to Auth header
            SetAuthToken(token)
            dispatch(GetProfile())
            // Decode token to get user data
            const decoded = jwt_decode(token)
            // Set current user
            dispatch(setCurrentUser(decoded))
            dispatch({
                type: SET_ERRORS,
                payload: []
            })
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        })
        .catch(err =>
           {
            // console.log(err)
            dispatch({
                type: SET_ERRORS,
                payload: err?.response?.data
            })
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        }

        )
}

export const LogOut = (navigation)=>dispatch=>{
    // AsyncStorage.removeItem("jwtToken")
    localStorage.removeItem("jwtToken")




    dispatch( {
        type: SET_USER,
        payload: {}
    })
    dispatch({
        type: SET_PROFILES,
        payload:[]
    })
    dispatch({
        type: SET_REQUEST,
        payload:{}
    })
    dispatch({
        type: SET_CURRENT_ACCESS,
        payload:[]
    })
    // navigation.navigate('Login')

}

export const getUserByEmail = (info,navigation)=>dispatch=>{
    const {idToken,user } = info
    const {email, familyName, givenName, id, photo } = info.user
    // console.log(photo)

const data = {email, name:familyName+' '+givenName,avatar:photo, googleId:id, tokenId:idToken}
    // console.log(data.email )
    // email, name, googleId, tokenId
    // console.log("email", info.user.email)
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUserByEmail/${info.user.email}`)
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_USER,
            payload: res?.data
        })


        // dispatch(registerGoogleUser(data))

        // dispatch(loginUser(data))
    })
    .catch(err =>
       {
        // console.log("err in authAction.js line 366",err)
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: err?.response?.data
        // })
        // dispatch(registerGoogleUser(data))
    }
    )
}


export const registerUser =  (userData, history ) => (dispatch) => {
    // console.log(userData.role)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/users`, userData)
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));
                history.push('/login')


                    // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})


                dispatch(setLoading(true));
            }, 1000);




        })


        .catch( (err) =>{
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
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
                }, 3000);
            }



        )
}
export const registerCollectorUser =  (userData, history ) => (dispatch) => {
    console.log("action",userData)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/collector`, userData)
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));
                if(userData.role === 'MUNICIPAL' || userData.role ==='PRIVATE_COMPANY'){
                    const { token } = res.data
                    localStorage.setItem('jwtToken', token)
            SetAuthToken(token)
                    // navigation.navigate('DemandeMunicipalScreen', {role:userData.role})
                }else{

                    dispatch(AddCollector({

                        userId:res?.data?.user?._id,
                        firstName:userData.firstName,
                        lastName:userData.lastName,
                        entityType: userData.entityType

                    }))
                    // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})
                    setTimeout(() => {
                        history.push('/login')

                    }, 1000);
                }

                dispatch(setLoading(true));
            }, 1000);




        })


        .catch( (err) =>{
            console.log(err)
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
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
                }, 3000);
            }



        )
}

export const AddCollector =  (userData, navigation ) => (dispatch) => {
    console.log("action",userData)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/collector/AddCollector`, userData)
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));


                dispatch(setLoading(true));
            }, 1000);
            // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})




        })


        .catch( (err) =>{
            console.log(err)
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
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
                }, 3000);
            }



        )
}

export const registerEntrepriseUser =  (userData, history ) => (dispatch) => {
    console.log("action",userData)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/entreprise`, userData)
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));
                if(userData.role === 'MUNICIPAL' || userData.role ==='PRIVATE_COMPANY'){
                    const { token } = res.data
                    localStorage.setItem('jwtToken', token)
            SetAuthToken(token)
                    // navigation.navigate('DemandeMunicipalScreen', {role:userData.role})
                }else{

                    dispatch(AddEntreprise({

                        userId:res?.data?.user?._id,
                        firstName:userData.firstName,
                        lastName:userData.lastName,
                        typeCompany: userData.typeCompany,
                        companyName:userData.companyName,
                        phone:userData.phone

                    }))
                    // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})
                }

                dispatch(setLoading(true));
            }, 1000);



            setTimeout(() => {
                history.push('/login')

            }, 1000);
        })


        .catch( (err) =>{
            console.log(err)
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
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
                }, 3000);
            }



        )
}
export const AddEntreprise =  (userData, navigation ) => (dispatch) => {
    console.log("action",userData)

    dispatch({
        type: SET_ERRORS,
        payload: {}
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    axios.post(`${process.env.REACT_APP_API_URL}/api/entreprise/AddEntreprise`, userData)
        .then(async(res) => {
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
            dispatch({
                type:SET_IS_SECCESS,
                payload:true
            })
            setInterval(() => {
                dispatch({
                    type:SET_IS_SECCESS,
                    payload:false
                })

            }, 3000);
            setTimeout(() => {

                dispatch({
                    type:SET_IS_LOADING,
                    payload:false
                })
                dispatch(setLoading(false));


                dispatch(setLoading(true));
            }, 1000);
            // navigation.navigate('OTPVerifyEmail', {email:res?.data?.user?.email, userId:res?.data?.user?._id})




        })


        .catch( (err) =>{
            console.log(err)
               dispatch({
                  type: SET_ERRORS,
                  payload: err?.response?.data
                })

                dispatch({
                    type: SET_ERRORS,
                    payload: err?.response?.data
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
                }, 3000);
            }



        )
}







