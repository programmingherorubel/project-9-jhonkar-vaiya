import { faBars, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'

const Navbar = () => {
    const [activeMenu,setActiveMenu] = useState(false)
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
                                    
                                </ul>
                            </div>
                            <div>
                            <div className={activeMenu ? 'menucontainer extraNav' : 'menucontainer'}>
                            <ul className='mobileMenu'>
                                    <li className='mt-3'><Link style={{color:'black'}} to='/' className='link'>Home</Link></li>
                                    <li className='mt-3'><Link style={{color:'black'}} to='/statistics' className='link'>statistics</Link></li>
                                    <li className='mt-3'><Link style={{color:'black'}} to='/applyjob' className='link'>applied jobs</Link></li>
                                    <li className='mt-3'><Link style={{color:'black'}} to='/blog' className='link'>blog</Link></li>
                                    <li className='mt-3'><Link style={{color:'black'}} to='/apply'>< FontAwesomeIcon style={{color:'gray'}} icon={faBox} /></Link></li>
                                </ul>
                            </div>
                            </div>
                            <button className='customButton apply'>
                                start applying
                            </button>
                            <FontAwesomeIcon onClick={()=> setActiveMenu(!activeMenu)} icon={faBars} className='bars' />
                        </div> 
                    </Col>
                </Row>
            </Container>
            <hr />
        </Container> 
    );
};

export default Navbar;