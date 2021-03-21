import React, { useEffect, useState } from 'react';
import { Form, FormGroup, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img from '../../images/image 6.png'
import fakeData from '../fakeData/fakeData.json'
import './Destination.css'

const Destination = () => {
    // let {id} = useParams();
    // const tickets = fakeData.find(res =>res.id === id)
    // console.log(tickets);
    const {id} = useParams();
    const tickets = fakeData[id-1];

    const [state, setState] = useState(false);
    const handleSearch = () => {
         setState(true);
    }
    // const found = tickets.find((t) => t.name === name);
    

    return (
    <>
    {
      tickets === undefined && <div>
        <h1>hey plz go home page and select ticket buy</h1>
      </div>
    }
        <div style={{ height: "100vh", backgroundColor: "gray" }}>
        <div className="">
          <div className="row">
            <div className="col-md-3 p-5">
              <Form>
                <div className="form-group">
                  <label>Where</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="where"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="to"
                    required
                  />
                </div>
             
              <button
                onClick={handleSearch}
                className="btn btn-primary btn-block"
              >
                Search
              </button>
              </Form>
              {state && (
                <ListGroup className=" py-3">
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.ticketImg} alt="" />{" "}
                    <h3 className="mr-2">Ticket 1</h3> <h3>200tk</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.ticketImg} alt="" />{" "}
                    <h3 className="mr-2">Ticket 2</h3> <h3>250tk</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.ticketImg} alt="" />{" "}
                    <h3 className="mr-2">Ticket 3</h3> <h3>300tk</h3>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </div>
            <div className="col-md-9 py-5">
             <img src={img} alt=""/>
          </div>
          </div>
        </div>
      </div>
</>
    );
};

export default Destination;