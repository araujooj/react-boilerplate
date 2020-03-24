import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Redirect, Route } from "react-router-dom";
import { HOME_ROUTE } from "../../../constants/translations.routes";
import loadingComponent from "../../UI/Loading";

function GuestRoute({
  path,
  exact,
  user,
  component,
  redirect
}) {
  const { t } = useTranslation();

  if (user) {
    return redirect ? <Redirect from={path} to={t(HOME_ROUTE)}/> : <></>;
  }

  return (
    <Route
      path={path}
      exact={exact}
      component={loadingComponent(component)}
    />
  );
}

GuestRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  user: PropTypes.object,
  redirect: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

GuestRoute.defaultProps = {
  redirect: true
};

export default GuestRoute;
