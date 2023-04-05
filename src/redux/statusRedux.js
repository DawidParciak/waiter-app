import { API_URL } from "../config";

//selectors
export const getAllStatus = ({ status }) => status;

// actions
const createActionName = actionName => `app/status/${actionName}`;
const PULL_STATUS = createActionName('PULL_STATUS');

// action creators
export const pullStatus = payload => ({ type: PULL_STATUS, payload });
export const fetchStatus = () => {
  return (dispatch) => {
    fetch(`${API_URL}/status`)
      .then(res => res.json())
      .then(status => dispatch(pullStatus(status)))
  }
};

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case PULL_STATUS:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default statusReducer;
