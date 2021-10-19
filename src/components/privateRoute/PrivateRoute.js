import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <h1 className="text-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </h1>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
