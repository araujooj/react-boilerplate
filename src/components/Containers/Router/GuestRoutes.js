import PropTypes from "prop-types";
import React from 'react';
import { Switch } from "react-router-dom";
import { guestRoutes } from "../../../helpers/routes";
import PageNotFound from "../../Pages/NotFound";
import loadingComponent from "../../UI/Loading";
import GuestRoute from "./GuestRoute";

function GuestRoutes({ user }) {
  return (
    <Switch>
      {guestRoutes.map(({ component, ...route }) => (
        <GuestRoute
          key={route.path}
          component={loadingComponent(component)}
          user={user}
          {...route}
        />
      ))}
      <GuestRoute
        path="*"
        redirect={false}
        user={user}
        component={PageNotFound}
      />
    </Switch>
  );
}

GuestRoutes.propTypes = {
  user: PropTypes.object
};

export default GuestRoutes;
