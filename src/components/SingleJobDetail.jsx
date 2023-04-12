import { faDollar, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToDb } from '../../public/fakedb';
import '../Style/SingleJobDetail.css';

const SingleJobDetail = () => {
    const singleDataInfo = useLoaderData()
  
    const applyNowHandeler = (id)=>{
        toast.success('apply confirmed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        addToDb(id)
       
    }

    const {id,img,jobTitle,jobType,location,salary,phone,email,address,jobDescription,educationalRequirement,experience,category,jobResponsibility} =  singleDataInfo || {}
    return (
        <>
            <Container fluid className='singleDetail'>
                <div className='category'><h1 style={{color:'white',textTransform:'capitalize'}}>category: <span style={{color:'tomato'}}>{category}</span></h1></div>
            </Container>
            <Container>
            <Row>
                    <Col md={8} sm={6}>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Job Description :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{jobDescription}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Job Responsibility :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{jobResponsibility}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Educational Requirements: :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{educationalRequirement}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Experiences:</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{experience}</span>
                            </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className='p-3 m-3' style={{background:'white'}}>
                            <h6 style={{color:'gray'}}className='mt-3'>job Details</h6><hr />
                            <h6 className='mt-3'><FontAwesomeIcon style={{color:'gray'}}className='mx-2' icon={faDollar}/> Salary: {salary}</h6>
                            <h6 className='mt-3'><FontAwesomeIcon style={{color:'gray'}}className='mx-2' icon={faLock}/> Job Title:{jobTitle}</h6>
                            <h5 style={{color:'gray'}}className='mt-3'>Contact Information</h5> 
                            <p style={{fontWeight:'600',marginTop:'10px'}}>Phone : {phone} </p> 
                            <p style={{fontWeight:'600',marginTop:'10px'}}>Email :  {email} </p>
                            <p style={{fontWeight:'400',marginTop:'10px'}}><b>Address</b> : {address} </p> 
                            <button onClick={()=>applyNowHandeler(id)} className='customButton py-1 px-4'>Apply Now</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleJobDetail;