import React from 'react'
// import { Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
const ForceRedirect = ({user, children}) =>{
  // console.log(user)
    if(user.isConnected && user.isAdmin){
        return <Redirect to="/admin" replace/>
      } else if (
        user.isConnected && user.isCompany
      ) {
        return <Redirect to="/company" replace/>
      }

      else if (
        user.isConnected && user.isUser
      ) {
        return <Redirect to="/citizen" replace/>
      }
      else if (
        user.isConnected && user.isCollector
      ) {
        return <Redirect to="/collector" replace/>
      }



      return children
}

export default ForceRedirect