/**======================== ACTIONS =======================================*/

export function prefix(prefix, actions, separator = '-') {
  return Object.keys(actions)
    .reduce(function(mappedActions, action) {
      return { ...mappedActions, [action]: [prefix, actions[action]].join(separator) };
    }, {});
}

export function action(actionKey) {
  return function(parameter, dispatch) {
    dispatch({
      type: actionKey,
      payload: parameter
    });
  };
}

export function actionCreator(actionFn, parameterDefault = null, override = false) {
  return function(parameter = parameterDefault) {
    return function(dispatch) {
      return actionFn(parameterDefault && override ? parameterDefault : parameter, dispatch);
    };
  };
}

export function makeActionCreators(functions = {}) {
  return Object.entries(functions).reduce((actions, [key, value]) => ({
    ...actions,
    [key]: actionCreator(value)
  }), {});
}

export const bindActions = (actions, dispatch) => Object.keys(actions).reduce((result, action) => {
  return {
    ...result,
    [action]: (...args) => Reflect.apply(actions[action], undefined, args)(dispatch)
  };
}, {});

/**======================== REDUCERS =======================================*/

export function change(updateKey) {
  return function(state, { payload }) {
    return {
      ...state,
      [updateKey]: payload
    };
  };
}

export function clear(updateKey) {
  return function(state, { payload }) {
    return {
      ...state,
      [updateKey]: null
    };
  };
}

export function changeAndClear(updateKey, clear = []) {
  return function(state, { payload }) {
    return {
      ...state,
      [updateKey]: null,
      ...clear.reduce((payload, key) => ({ [key]: null }), {})
    };
  };
}

export const logReducer = reducer => (state, action) => {
  const newState = reducer(state, action);

  console.log('ACTION', action);
  console.log('OLD_STATE', state);
  console.log('NEW_STATE', newState);

  return newState;
};

export function initReducer(state) {
  return {
    ...state,
    initialState: { ...state }
  };
}

export function reducerFactory(defaultState, handlers) {
  return (state = defaultState, action) => {
    const handler = handlers[action.type];

    return handler ?
      handler(state, action) :
      state;
  };
}
