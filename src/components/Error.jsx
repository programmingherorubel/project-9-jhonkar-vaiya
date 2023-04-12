import React from 'react';
import { useRouteError } from 'react-router-dom';
import notfound from '../img/notfound.png'
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './Navbar'

const Error = () => {
 
    return (
        <Container fluid>
                <Navbar/>
            <Row>
                <Col>
                <img src={notfound} className='img-fluid w-100' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Error;