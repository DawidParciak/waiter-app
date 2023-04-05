//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const PULL_TABLES = createActionName('PULL_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const pullTables = payload => ({ type: PULL_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const fetchTables = dispatch => {
  fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(pullTables(tables)))
};

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
