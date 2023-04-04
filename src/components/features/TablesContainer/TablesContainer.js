import { useSelector } from "react-redux"
import { getAllTables } from "../../../redux/tablesRedux"
import { Container, Row } from "react-bootstrap";
import TableSingle from "../TableSingle/TableSingle";


const TablesContainer = () => {
  const tables = useSelector(getAllTables);

  return (
    <Container className="px-0 py-3">
      <Row>
        {tables.map( table => (
          <TableSingle key={table.id} {...table} />
        ))}
      </Row>
    </Container>
  )
};

export default TablesContainer;
