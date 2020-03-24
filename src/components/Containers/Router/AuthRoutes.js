import PropTypes from "prop-types";
import React from 'react';
import { Switch } from "react-router-dom";
import { authRoutes } from "../../../helpers/routes";
import PageNotFound from "../../Pages/NotFound";
import loadingComponent from "../../UI/Loading";
import AuthRoute from "./AuthRoute";

function AuthRoutes({ user }) {
  return (
    <Switch>
      {authRoutes.map(({ component, ...route }) => (
        <AuthRoute
          key={route.path}
          component={loadingComponent(component)}
          user={user}
          {...route}
        />
      ))}
      <AuthRoute
        path="*"
        redirect={false}
        user={user}
        component={PageNotFound}
      />
    </Switch>
  );
}

AuthRoutes.propTypes = {
  user: PropTypes.object,
  expiration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.number
  ])
};

export default AuthRoutes;
