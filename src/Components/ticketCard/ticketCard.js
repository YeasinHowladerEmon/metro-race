import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ticketCard = (props) => {
    const tickets = props.ticket
    return (
        <div>
             {/* <ListGroup className=" py-3">
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.img} alt="" />{" "}
                    <h3 className="mr-2">{tickets.name}</h3> <h3>200tk</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.img} alt="" />{" "}
                    <h3 className="mr-2">{tickets.name}</h3> <h3>250tk</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                    <img className="img mr-3" src={tickets.img} alt="" />{" "}
                    <h3 className="mr-2">{tickets.name}</h3> <h3>300tk</h3>
                  </ListGroup.Item>
                </ListGroup> */}
        </div>
    );
};

export default ticketCard;