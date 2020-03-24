import { action, actionCreator } from "../../helpers/reducers";
import { actions } from "../reducers/global";

const setError = action(actions.SET_ERROR);
const setLoading = action(actions.SET_LOADING);

export const actionCreators = {
  setError: actionCreator(setError),
  setLoading: actionCreator(setLoading)
};
