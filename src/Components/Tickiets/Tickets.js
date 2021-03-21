import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, ListGroup } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import img from '../../images/image 6.png'
import fakeData from '../fakeData/fakeData.json'

const Tickets = () => {
    // let {id} = useParams();
    // const tickets = fakeData.find(res =>res.id === id)
    // console.log(tickets);
    const {id} = useParams();
    console.log(id);
    const tickets = fakeData[id-1];
    console.log(tickets);

    const [state, setState] = useState(false);
    const handleSearch = () => {
         setState(true);
    }
    // const found = tickets.find((t) => t.name === name);
    

    return (
        <div style={{ height: "100vh", backgroundColor: "#3aafa9" }}>
        <div className="container">
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
              </Form>
              <button
                onClick={handleSearch}
                className="btn btn-primary btn-block"
              >
                Search
              </button>
              {state && (
                <ListGroup className=" py-3">
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src="" alt="" />{" "}
                    {/* <h3 className="mr-2">{tickets.name}</h3> <h3>200tk</h3> */}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src="" alt="" />{" "}
                    <h3 className="mr-2">hlw</h3> <h3>250tk</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src="" alt="" />{" "}
                    <h3 className="mr-2">hello</h3> <h3>300tk</h3>
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
//         <div>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                 <Form.Control onBlur={handleBlur} type="text" placeholder="mirpur" required />
//                 </Form.Group>
//                     <Form.Group>
//                         <Form.Control onBlur={handleBlur}  type="text" placeholder="Dhaka" required />
//                     </Form.Group>
//                     <Button onClick={(e) => e.preventDefault()} type="submit">submit</Button>
//                 </Form>
           

// {/* 
//              <div>
//                 <div>
//                    {
//                        tickets.map(tickets => <div>{tickets.location}</div>)
//                    }
//                 </div>
//             </div> 
//              */}
//         </div>
    );
};

export default Tickets;