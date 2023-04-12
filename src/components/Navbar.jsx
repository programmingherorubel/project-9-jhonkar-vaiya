import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'

const Navbar = () => {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>
                        <div className='menuContainer'>
                            <h3 className='logo'>
                                JOB H
                                <span style={{color:'tomato'}}>
                                    unter
                                </span>
                                <span style={{fontWeight:'700'}}>
                                    .
                                </span>
                            </h3>
                            <div>
                                <ul className='menu'>
                                    <li><Link to='/' className='link'>Home</Link></li>
                                    <li><Link to='/statistics' className='link'>statistics</Link></li>
                                    <li><Link to='/applyjob' className='link'>applied jobs</Link></li>
                                    <li><Link to='/blog' className='link'>blog</Link></li>
                                    <li><Link to='/apply'>< FontAwesomeIcon style={{color:'gray'}} icon={faBox} /></Link></li>
                                </ul>
                            </div>
                            <button className='customButton'>
                                start applying
                            </button>
                        </div> 
                    </Col>
                </Row>
            </Container>
            <hr />
        </Container> 
    );
};

export default Navbar;