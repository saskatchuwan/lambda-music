import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      //would this make more sense to redirect to "/login" instead?
      <Redirect to="/signup" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));