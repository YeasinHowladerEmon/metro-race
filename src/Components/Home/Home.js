import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card1 from '../../images/blue.png'
import card2 from '../../images/green.png'
import card3 from '../../images/pink.png'
import card4 from '../../images/red.png'
import './Home.css'
import fakeData from '../fakeData/fakeData.json'
import { useState } from 'react';
import { useEffect } from 'react';
import Ticket from '../Ticket/Ticket'

const Home = () => {
    const [ticket, setTicket] = useState([])
    useEffect(() =>{
      setTicket(fakeData);
    }, [])
    return (
    <>    
            <div>
            {
                ticket.map(ticket => <Ticket key={ticket.color} ticket={ticket} ></Ticket>)
            }
            </div>
        <Container  className="justify-content-center">
            <Row>
                <Col>
                <div className="card text-white" >
                    <img src={card1} className="card-img" style={{width: "15rem"}} alt=""/>
                    <div className="card-img-overlay mt-2" >
                        <h1 className="card-title">Card title</h1>
                        <button className=" all-button mt-5">Buy Now</button>
                        <h1 className="mt-5">TK : 500 </h1>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="card text-white"  >
                    <img src={card2} className="card-img " style={{width: "15rem"}} alt=""/>
                    <div className="card-img-overlay mt-2">
                        <h1 className="card-title">Card title</h1>
                        <button className=" all-button mt-5">Buy Now</button>
                        <h1 className="mt-5">TK : 500 </h1>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="card text-white" >
                    <img src={card3}  style={{width: "15rem"}} alt=""/>
                    <div className="card-img-overlay mt-2">
                        <h1 className="card-title">Card title</h1>
                        <button className=" all-button mt-5">Buy Now</button>
                        <h1 className="mt-5">TK : 500 </h1>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="card text-white">
                    <img src={card4} className="card-img"  style={{width: "15rem"}} alt=""/>
                    <div className="card-img-overlay mt-2">
                        <h1 className="card-title">Card title</h1>
                        <button className=" all-button mt-5">Buy Now</button>
                        <h1 className=" mt-5">TK : 500 </h1>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </>    
    );
};

export default Home;