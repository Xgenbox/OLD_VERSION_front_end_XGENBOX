
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

import SmartBox from "components/products/SmartBox";
import FleetManagmentPlatform from "components/products/FleetManagmentPlatform";
import QuoteRequest from "components/contact/QuoteRequest";
import SmartCities from "components/market/SmartCities";
import CommercialEstablishment from "components/market/CommercialEstablishment";
import PrivateOrganization from "components/market/PrivateOrganization";
import WasteCollector from "components/market/WasteCollectors";
import AboutCompany from "components/Company/AoutCompany";
import Partnership from "components/Company/Partnership";
import ContactDetail from "components/contact/ContactDetail";
import TechnicalAssistance from "components/contact/TechnicalAssistance";
import AdminLayout from "./layouts/Admin.js";
import CitizenLayout from "./layouts/Citizen.js";
import CollectorLayout from "./layouts/Collector.js";
import CompanyLayout from "./layouts/Company.js";
import PrivateRouter from "components/PrivateRouter.js";
import ForceRedirect from "components/ForceRedirect.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import NoAccess from "components/NoAccess.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { LogOut } from "Redux/actions/authActions.js";
import { SetAuthToken } from "utils/SetAuthToken.js";
import { GetProfile } from "Redux/actions/profile.actions.js";
import { setCurrentUser } from "Redux/actions/authActions.js";
import UserDetails from "components/UserDetails.js";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css'
import axios from "axios";
import ForgotPassword from "views/examples/ForgotPassword.js";
import SignUpChoice from "views/examples/SignUpChoice.js";
import CollectorSignUp from "views/examples/CollectorSignUp.js";
import CompanySignUp from "views/examples/CompanySignUp.js";
import { ErrorBoundary } from "react-error-boundary";
// import 'primeflex/primeflex.css';
function App() {
  // const user= {
  //   isConnected:false,
  //   role:"ADMIN"
  // }


  const user = useSelector(state=>state.auth)
  const profile = useSelector(state=>state?.profile?.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    const value = localStorage.getItem('jwtToken')

        if (value) {
          const decode = jwt_decode(value);
          // console.log("ligne 107:******************************************",value)
          // console.log(decode);
          dispatch(setCurrentUser(decode));
          dispatch(GetProfile());
          dispatch(GetProfile());
          // dispatch(GetRequest());
          SetAuthToken(value); // Corrected typo here
        }


    const activeExpires = new Date(user?.user?.iat);
    const currentDate = new Date();
    // console.log(`activeExpires-----------------------------------------------------------------------------------`,
    //  activeExpires < currentDate);
    // if (currentDate > activeExpires) {
    //   localStorage.removeItem('jwtToken');
    //   dispatch(LogOut())
    //   // dispatch(setCurrentUser({}));
    // }
  }, []);

  useEffect(() => {
    dispatch(GetProfile())

  }, [profile])

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      try {
        const decodedToken = jwt_decode(jwtToken);
        const activeExpires = new Date(decodedToken.exp * 1000); // Convert seconds to milliseconds
        const currentDate = new Date();

        if (currentDate > activeExpires) {
          // Token has expired
          localStorage.removeItem('jwtToken');
          dispatch(LogOut());
          dispatch(setCurrentUser({}));
        } else {
          // Token is still valid, check with the server
          axios.get(`${process.env.REACT_APP_API_URL}/api/users/checkTokenValidity`) // Replace with your backend endpoint
            .then(response => {
              // Request was successful, token is valid
              // console.log('Token is valid');
            })
            .catch(error => {
              // Request failed, likely due to invalid token
              // console.error('Token validation failed:', error);
              localStorage.removeItem('jwtToken');
              dispatch(setCurrentUser({}));
              dispatch(LogOut());
            });
        }
      } catch (error) {
        // Token decoding failed
        // console.error('Token decoding failed:', error);
        localStorage.removeItem('jwtToken');
        dispatch(setCurrentUser({}));
        dispatch(LogOut());
      }
    }
  }, [dispatch,user]);


  return (
    <BrowserRouter>
     <React.StrictMode>
     {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}

    {/* <DemoNavbar/> */}
    <Switch>
           <Route  path="/admin"   render={(props) =>
           <PrivateRouter user={user}>
            <AdminLayout {...props} />



           </PrivateRouter>
          } />

<Route  path="/citizen"   render={(props) =>
           <PrivateRouter user={user}>
            <CitizenLayout {...props} />
           {/* <Route path="/profile-page" exact render={(props) => <Profile {...props} />}/> */}

           </PrivateRouter>
          } />
          <Route  path="/collector"   render={(props) =>
           <PrivateRouter user={user}>
            <CollectorLayout {...props} />
           {/* <Route path="/profile-page" exact render={(props) => <Profile {...props} />}/> */}

           </PrivateRouter>
          } />
          <Route  path="/company"   render={(props) =>
           <PrivateRouter user={user}>
            <CompanyLayout {...props} />
           {/* <Route path="/profile-page" exact render={(props) => <Profile {...props} />}/> */}

           </PrivateRouter>
          } />



           <Route path="/" exact render={(props) => <Landing {...props} />} />
           <Route path="/landing-page" exact render={(props) => <Landing {...props} />}/>
           <Route path="/smart-box" exact render={(props) => <SmartBox {...props} />}/>
           <Route path="/fleet-management-platform" exact render={(props) => <FleetManagmentPlatform {...props} />}/>
           <Route path="/quote-request" exact render={(props) => <QuoteRequest {...props} />}/>
           <Route path="/smart-cities" exact render={(props) => <SmartCities {...props} />}/>
           <Route path="/commercial-establishments" exact render={(props) => <CommercialEstablishment {...props} />}/>
           <Route path="/login" render={(props) =>
           <ForceRedirect user={user}>
           {/* <Login /> */}
           <Login {...props} />
         </ForceRedirect>
           } />
           <Route path="/private-organizations" exact render={(props) => <PrivateOrganization {...props} />}/>
           <Route path="/waste-collectors" exact render={(props) => <WasteCollector {...props} />}/>
           <Route path="/about-company" exact render={(props) => <AboutCompany {...props} />}/>
           <Route path="/partnership-opportunities" exact render={(props) => <Partnership {...props} />}/>
           <Route path="/contact-details" exact render={(props) => <ContactDetail {...props} />}/>
           <Route path="/technical-assistance" exact render={(props) => <TechnicalAssistance {...props} />}/>
           {/* <Route path="/login-page" exact render={(props) => <Login {...props} />}/> */}
           <Route path="/profile-page" exact render={(props) => <Profile {...props} />}/>
           <Route path="/register-page" exact render={(props) => <Register {...props} />}/>
           <Route path="/forgotpassword-page" exact render={(props) => <ForgotPassword {...props} />}/>
           <Route path="/signupChoice-page" exact render={(props) => <SignUpChoice {...props} />}/>
           <Route path="/signup-Collector-page" exact render={(props) => <CollectorSignUp {...props} />}/>
           <Route path="/signup-company-page" exact render={(props) => <CompanySignUp {...props} />}/>
           <ForceRedirect user={user}>
           {/* <Login /> */}
           <NoAccess  />
         </ForceRedirect>
           {/* <Route path="/noaccess" exact render={(props) => <NoAccess {...props} />}/> */}
           {/* <FooterComponent/> */}
           <Redirect  to="/" />
    </Switch>
    </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;