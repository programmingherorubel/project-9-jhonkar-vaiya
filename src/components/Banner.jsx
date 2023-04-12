import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import job from '../img/banner.png'

const Banner = () => {
    return (
        <Container>
            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Col md={6}  className='mt-4 '>
                    <h1>One Step <br />Closer To Your <br /><span style={{color:'#818DFE'}}>Dream Job</span></h1>
                    <p style={{color:'gray'}}>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='p-2 customButton'>Get Started</button>
                </Col>
                <Col md={6} className='mt-4 text-end'>
                    <img src={job} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;