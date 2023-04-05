import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllStatus } from "../../../redux/statusRedux";

const TableForm = ({ action }) => {

  const { id } = useParams();
  const tableData = useSelector((state) => getTableById(state, id));
  const statuses = useSelector(getAllStatus);

  const [table] = useState(tableData.id);
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  useEffect(() => {
    if (status === "Cleaning" || status === "Free") {
      setPeopleAmount(0);
    } else {
      setPeopleAmount(tableData.peopleAmount)
    }
  }, [status, tableData.peopleAmount]);

  useEffect(() => {
    if (maxPeopleAmount > 10) {
      setMaxPeopleAmount(10);
    } else if (maxPeopleAmount < 0) {
      setMaxPeopleAmount(0)
    }
  }, [maxPeopleAmount, peopleAmount]);

  useEffect(() => {
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount)
    } else if (peopleAmount < 0){
      setPeopleAmount(0)
    }
  }, [peopleAmount, maxPeopleAmount]);

  useEffect(() => {
    if (status !== "Busy") {
      setBill(0)
    }
  }, [status]);

  const handleSubmit = event => {
    event.preventDefault();
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
            <h5 className="col-8 mb-0 d-flex align-items-center">Status: </h5>
            <Form.Select className="form-select d-flex" value={status} id="status" onChange={e => setStatus(e.target.value)}>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="d-flex justify-content-between">
            <h5 className="col-8 mb-0 d-flex align-items-center">People: </h5> 
            <Form.Control 
              id="peopleAmount"
              value={peopleAmount}
              min={0}
              type="number"
              onChange={e => setPeopleAmount(e.target.value)}
            /> 
            <p className="mx-2 mb-0 d-flex align-items-center">/</p>
            <Form.Control 
              id="maxPeopleAmount"
              value={maxPeopleAmount}
              min={0}
              max={10}
              type="number"
              onChange={e => setMaxPeopleAmount(e.target.value)}
            /> 
          </Form.Group>
          {status === "Busy" && (
            <Form.Group className="d-flex justify-content-between my-2">
              <h5 className="col-8 mb-0 d-flex align-items-center">Bill: </h5> 
              <h5 className="m-0 pe-2 d-flex align-items-center fw-normal">$</h5>
              <Form.Control
                id="bill"
                value={bill}
                min={0}
                onChange={e => setBill(e.target.value)}
                type="number"
              />
            </Form.Group>
          )}
          <Button className="btn btn-primary my-2" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TableForm;
