import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../Home/Home.css'


const Ticket = (props) => {
  const ticket = props.ticket;

  // const history = useHistory();
  // const handleBuy = (name) => {
  //   history.push(`/tickets/${name}`)
  // }


  return (
    <div>
      <h1>{ticket.name}</h1>
      <div className="card text-white" >
        <img src={ticket.img} className="card-img" style={{ width: "15rem" }} alt="" />
        <div className="card-img-overlay mt-2" >
          <h4 className="card-title">{ticket.name}</h4>
          <Link to={`/tickets/${ticket.id}`}>button</Link>
          {/* <button onClick={() => handleBuy(ticket.name)} className=" all-button mt-5">Buy Now</button> */}
          <h1 className="mt-5">TK : {ticket.tk} </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Ticket;