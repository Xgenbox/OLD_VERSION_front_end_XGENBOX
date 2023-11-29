import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRouter = ({ user, children }) => {
  if (!user.isConnected) {
    return <Redirect to="/login" />
  }

  if (!user.isAdmin
    && !user.isCompany
    && !user.isUser
    && !user.isCollector
     ) {
    return <Redirect to="/noaccess" />
  }

  return children;
}

export default PrivateRouter;
