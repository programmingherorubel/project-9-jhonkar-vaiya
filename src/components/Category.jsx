import { faCoins, faFaceSmile, faGear, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    const [category,setCategory] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <Container >
            <Row>
                <h2 className='text-center'>Job Category List</h2>
                <p style={{color:'gray',textAlign:'center'}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
               {
                category.map(singleCategory => <Col md={3} sm={6} className='mt-3'>
                <div className='p-3 m-2' style={{background:'white',borderRadius:'8px'}}>
                    <i className={singleCategory.icon} style={{fontSize:'25px',padding:'20px',color:'gray'}}></i>
                    <h4 style={{color:'gray'}}>{singleCategory.title}</h4>
                    <span>{singleCategory.available}</span>
                </div>
            </Col>)
               }
            </Row>
        </Container>
          
    );
};

export default Category;