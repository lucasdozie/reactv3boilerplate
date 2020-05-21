import React from "react"
import PropTypes from 'prop-types';
import AuthLayout from "../layouts/auth"
import DefaultLayout from "../layouts/default"
import { Route, Redirect } from 'react-router-dom';  
export default function RouteWrapper({   
  component: Component,   
  isPrivate,   
  ...rest 
}) {   
  const signed = false;    
  
  /**    
  * Redirect user to SignIn page if he tries to access a private      route
  * without authentication.    
  */   
  if (isPrivate && !signed) {     
    return <Redirect to="/" />;   
  }    
  /**    
  * Redirect user to Main page if he tries to access a non private route    
  * (SignIn or SignUp) after being authenticated.    
  */   
  if (!isPrivate && signed) {     
    return <Redirect to="/dashboard" />;   
  }    
  
  let Layout = signed ? DefaultLayout : AuthLayout ;
  /**    
  * If not included on both previous cases, redirect user to the desired route.    
  */   
  return <Route {...rest} 
            render={(props) => (
              <Layout>
                <Component {...props} />
              </Layout>
            )
            } />; 
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};