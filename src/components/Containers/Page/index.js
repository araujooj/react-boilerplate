import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Header from './Header';

function Page({ user, children }) {
  return (
    <div className={"wrapper"}>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="content-wrapper">
            {children}
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  user: PropTypes.object,
  sidebar: PropTypes.bool,
  children: PropTypes.node
};

export default Page;
