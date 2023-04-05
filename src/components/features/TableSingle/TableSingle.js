import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const TableSingle = props => {
  return (
    <Col lg='12' className="my-1">
      <Card.Body className="d-flex justify-content-between border-bottom align-items-center">
        <div className="d-flex">
          <Card.Title className="d-flex align-items-end">
            <h4 className="mb-0" >Table: {props.id}</h4>
          </Card.Title>
          <Card.Subtitle className="d-flex align-items-end ps-3 fw-bold">
            Status:&nbsp;<span className="fw-normal">{props.status}</span>
          </Card.Subtitle>
        </div>
        <div className="py-3">
        <Link key={props.id} to={`/table/${props.id}`}>
          <Button className="btn btn-primary">
            Show more
          </Button>
        </Link>
        </div>
      </Card.Body>
    </Col>
  )
};

export default TableSingle;
