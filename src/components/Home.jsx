import React from 'react';
import Banner from './Banner';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import Jobs from './Jobs';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner/>  
            <Category/> 
            <Jobs data={data}/>
        </>
    );
};

export default Home;