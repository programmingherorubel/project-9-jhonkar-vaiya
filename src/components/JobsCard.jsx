import { faDollar, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({job}) => {
   const {img,jobTitle,jobType,salary,location,id} =job
   
    return (
        <>
            <div className='col p-3 m-3' style={{background:'white',border:'1px sold black'}}>
                <img src={img} style={{width:'150px'}} alt="" />
                <h5>{jobTitle}</h5>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary">Remote</button>
                    <button type="button" className="btn btn-outline-primary">Full Time</button>
                </div>
                <div className='d-flex gap-5 mt-4'>
                    <h6><FontAwesomeIcon style={{color:'gray'}} icon={faLocationPin}/> {location}</h6>
                    <h6> Salary: <FontAwesomeIcon style={{color:'gray'}} icon={faDollar}/>{salary}</h6>
                </div>
                <div>
                    <button className='customButton py-1 mx-3 mt-3'><Link to={`/${id}`} style={{color:'white'}} className="link">Job Detail</Link></button>
                </div>
            </div>
        </>
    );
};

export default JobsCard;