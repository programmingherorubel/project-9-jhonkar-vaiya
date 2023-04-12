import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import JobsCard from './JobsCard';

const Jobs = ({data}) => {
    const [jobInfo,setJobInfo] = useState(data.slice(0,6))

    
    const handelAllData = ()=>{
        setJobInfo(data)
    }

   
    return (
        <Container className='mt-5'>
            <h3 className='text-center'>Featured Jobs</h3>
            <p className='text-center'style={{color:'gray'}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='row row-cols-1 row-cols-md-2'>
            
            {
                 jobInfo.map(job => <div className='col' key={job.id}><JobsCard job={job}/></div>)
            }
            </div>
            <div className='text-center'>
                <button onClick={()=>handelAllData()} className='mt-3 customButton px-4 py-1'>See Alls</button>
            </div>
        </Container>
    );
};

export default Jobs;


// {
//     data.map(job => <JobsCard job={job} key={job.key} />)
// }
