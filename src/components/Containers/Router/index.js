import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from 'styled-components';
import theme from '../../../constants/theme';
import { makeTheme } from '../../../helpers/style';
import { Loading } from '../../UI/Loading';
import Page from '../Page';
import AuthRoutes from './AuthRoutes';
import GuestRoutes from './GuestRoutes';

function Router({ loading, user, expiration }) {
  const currentTheme = useMemo(() => makeTheme(theme), []);

  if (loading) {
    return (
      <Loading fixed/>
    );
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Page user = {user}>
        <AuthRoutes user={user} expiration={expiration}/>
        <GuestRoutes user={user}/>
      </Page>
    </ThemeContext.Provider>
  );
}

Router.propTypes = {
  theme: PropTypes.object,
  loading: PropTypes.bool,
  user: PropTypes.object,
  expiration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.number
  ])
};

const mapStateToProps = ({ auth, global }) => ({
});

export default connect(mapStateToProps)(Router);
