import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTableById, updateTableRequest } from "../../../redux/tablesRedux";
import TableForm from "../TableForm/TableForm";

const TableUpdateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));

  const handleSubmit = table => {
    dispatch(updateTableRequest({ ...table, id }));
    navigate('/')
  };

  if (!table) return <Navigate to={'/'} />
  else return (
    <TableForm 
      action={handleSubmit} 
      actionText="Update"
      table={table.table}
      status={table.status}
      peopleAmount={table.peopleAmount}
      maxPeopleAmount={table.maxPeopleAmount}
      bill={table.bill}
    />
  )
}

export default TableUpdateForm;
