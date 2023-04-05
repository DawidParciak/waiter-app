import { useSelector } from "react-redux"
import { getAllTables } from "../../../redux/tablesRedux"
import { Container, Row } from "react-bootstrap";
import TableSingle from "../TableSingle/TableSingle";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

const TablesContainer = () => {
  const tables = useSelector(getAllTables);

  if (tables.length === 0) return <LoadingSpinner />
  return (
    <Container className="px-0 py-3">
      <Row>
        {tables.map( (table, index) => (
          <TableSingle key={index} {...table} />
        ))}
      </Row>
    </Container>
  )
};

export default TablesContainer;
