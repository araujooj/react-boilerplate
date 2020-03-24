import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Router from "./components/Containers/Router";
import { NotificationContainer } from "react-notifications";
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
        <GlobalStyle/>
      </ConnectedRouter>
      <NotificationContainer />
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
};

export default function render({ store, history }) {
  ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById("root")
  );
}
