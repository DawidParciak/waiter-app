import { API_URL } from "../config";

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const PULL_TABLES = createActionName('PULL_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const pullTables = payload => ({ type: PULL_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => dispatch(pullTables(tables)))
  }
};
export const updateTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: table.id,
        status: table.status,
        peopleAmount: table.peopleAmount,
        maxPeopleAmount: table.maxPeopleAmount,
        bill: table.bill,
      }),
    };
    fetch(`${API_URL}/tables/${table.id}`, options)
      .then(() => dispatch(updateTable(table)))
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case PULL_TABLES:
      return [...action.payload]
    case UPDATE_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};
export default tablesReducer;
