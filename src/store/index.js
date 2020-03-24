import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { history } from "../base";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { DEVELOPMENT } from "../constants/environment";
import reducers from './reducers';

function buildRootReducer(allReducers, history) {
  return combineReducers({
    ...allReducers,
    router: connectRouter(history)
  });
}

function configureStore({ history, initialState = {} }) {
  const enhancedCompose = window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__') &&
  process.env.NODE_ENV !== 'production' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) :
    compose;

  const middlewares = [
    thunk,
    routerMiddleware(history)
  ];

  if (process.env.NODE_ENV === DEVELOPMENT) {
    middlewares.push(
      createLogger({
        collapsed: true
      })
    );
  }

  const createStoreWithMiddleware = enhancedCompose(
    applyMiddleware(
      ...middlewares
    )
  )(createStore);

  const allReducers = buildRootReducer(reducers, history);

  return createStoreWithMiddleware(allReducers, initialState);
}

export const store = configureStore({ history });
