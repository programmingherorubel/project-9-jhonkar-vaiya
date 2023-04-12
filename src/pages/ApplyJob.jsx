import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GetSelectJobs } from '../../public/fakedb';
import '../Style/ApplyJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faLocationPin, faMarker } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'

const ApplyJob = () => {
    const selectedJob = GetSelectJobs()
    const [data,setData]=useState([])
    const [filterValue,setFilterValue]=useState('Filter')
    
   
    let saveJobs = []
    
    useEffect(()=>{
        fetch('webdata.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    
    for(let myProperty in selectedJob){
        const purejobObject = data.find(findjob => findjob.id === Number(myProperty))
        saveJobs.push(purejobObject)
    }
    
    const info =  saveJobs.filter(job => {
        if(filterValue === 'Filter'){
            return job
        }else{
            
            return job?.jobType === filterValue
        }
    })
     
     

    return (
        <>
        <Navbar />
        <Container fluid className='applyjob'>
        <h1>Applied Jobs</h1>
        </Container>
        <Container className='mt-5'>
            <div  style={{display:'flex',justifyContent:'end'}}>
                <select onClick={(e)=>setFilterValue(e.target.value)} class="w-25 form-select " aria-label="Default select example">
                    <option selected>Filter</option>
                    <option >Remote</option>
                    <option >Full Time</option>
                </select>
            </div>
            <Row>
                <Col md={10} className='mx-auto'>
                    {
                     info.map((apply,index) => {
                            const {img,jobTitle,name,salary,location}  = apply || {}

                        return  <div key={index} style={{background:'white',display:'flex',justifyContent:'space-between',flexWrap:'wrap',alignItems:'center'}} className='mx-auto  p-3 m-3'>
                        <div className='applyjobinfo' style={{display:'flex',justifyContent:'start',gap:'10px'}}>
                            <img src={img} style={{width:'120px'}}className='border border-1' alt="" />
                            <div>
                                <h4>{jobTitle}</h4>
                                <h6>{name}</h6>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-primary">Remote</button>
                                    <button type="button" className="btn btn-outline-primary">Full Time</button>
                                </div>
                                <div className='d-flex'>
                                <h6 className='mt-3'><FontAwesomeIcon style={{color:'gray'}}className='mx-2' icon={faLocationPin}/> Salary: {location}</h6>
                                <h6 className='mt-3'><FontAwesomeIcon style={{color:'gray'}}className='mx-2' icon={faDollar}/> Salary: {salary}</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='customButton py-1 px-3'>View Details</button>
                        </div>
                     </div>
                     })   
                    }
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ApplyJob;