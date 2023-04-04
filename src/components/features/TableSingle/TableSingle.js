import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";


const TableSingle = props => {
  return (
    <Col lg='12' class="my-1">
      <Card.Body class="d-flex justify-content-between border-bottom align-items-center">
        <div class="d-flex">
          <Card.Title class="d-flex align-items-end">
            <h4 class="mb-0" >Table: {props.id}</h4>
          </Card.Title>
          <Card.Subtitle class="d-flex align-items-end ps-3 fw-bold">
            Status:&nbsp;<span class="fw-normal">{props.status}</span>
          </Card.Subtitle>
        </div>
        <div class="py-3">
        <Link key={props.id} to={`/table/${props.id}`}>
          <Button class="btn btn-primary">
            Show more
          </Button>
        </Link>
        </div>
      </Card.Body>
    </Col>
  )
};

export default TableSingle;
