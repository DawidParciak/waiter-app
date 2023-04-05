import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const TableForm = ({ action }) => {

  const { id } = useParams();
  const tableData = useSelector((state) => getTableById(state, id));

  const [table] = useState(tableData.id);
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const handleSubmit = () => {
    action({
      table,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
  };

  if(!tableData) return <Navigate to='/' />
  else return (
    <div>
      <div>
        <h2>Table {table}</h2>
      </div>
      <div className="col-lg-4 my-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="d-flex justify-content-between my-2">
            <h5 className="col-8">Status: </h5>
            <Form.Select className="form-select d-flex" value={status} onChange={e => setStatus(e.target.value)}>
              <option>Busy</option>
              <option>Free</option>
              <option>Cleaning</option>
              <option>Reserved</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="d-flex justify-content-between">
            <h5 className="col-8">People: </h5> 
            <Form.Control 
              className="form-control"
              value={peopleAmount}
              max={maxPeopleAmount}
              type="number"
              onChange={e => setPeopleAmount(e.target.value)}
            /> 
            <p className="mx-2 mb-0 d-flex align-items-center">/</p>
            <Form.Control 
              className="form-control"
              value={maxPeopleAmount}
              max={10}
              type="number"
              onChange={e => setMaxPeopleAmount(e.target.value)}
            /> 
          </Form.Group>
          <Form.Group className="d-flex justify-content-between my-2">
            <h5 className="col-8">Bill: </h5> 
            <Form.Control 
              className="form-control"
              value={bill}
              onChange={e => setBill(e.target.value)}
              type="number"
            />
          </Form.Group>
          <Button className="btn btn-primary my-2" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TableForm;
