import { change, prefix, reducerFactory } from "../../helpers/reducers";

export const actions = prefix('global', {
  SET_ERROR: 'set-erro',
  SET_LOADING: 'set-loading'
});

const initialState = {
  error: null,
  loading: false
};

const handlers = {};

handlers[actions.SET_ERROR] = change('error');
handlers[actions.SET_LOADING] = change('loading');

export default reducerFactory(initialState, handlers);
