import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Redirect, Route } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../constants/translations.routes";
import PageNotFound from "../../Pages/NotFound";
import loadingComponent from "../../UI/Loading";

function AuthRoute({
  path,
  exact,
  user,
  component,
  redirect,
  allowUser
}) {
  const { t } = useTranslation();

  if (!user) {
    return redirect ? <Redirect from={path} to={t(LOGIN_ROUTE)}/> : <></>;
  }

  if (allowUser && !allowUser(user)) {
    return (
      <Route
        path={path}
        exact
        component={PageNotFound}
      />
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      component={loadingComponent(component)}
    />
  );
}

AuthRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  user: PropTypes.object,
  redirect: PropTypes.bool,
  allowUser: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

AuthRoute.defaultProps = {
  redirect: true
};

export default AuthRoute;
