import React from 'react';
import Navbar from './Navbar'


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const marksData = [
        {
            name: 'As-1 ',
            marks: 57,
        },
        {
            name: 'As-2',
            marks: 59,
        },
        {
            name: 'As-3 ',
            marks: 60,
        },
        {
            name: 'As-4 ',
            marks: 59,
        },
        {
            name: 'As-5 ',
            marks: 56,
        },
        {
            name: 'As-6 ',
            marks: 53,
        },
        {
            name: 'As-7 ',
            marks: 60,
        },
        {
            name: 'As-8 ',
            marks: 60,
        },

    ];

    return (

        <>
            <Navbar/>
            <div className='mt-5' >
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'crimson', fontSize: '30px', alignItems: 'center', justifyContent: 'center' }}>Assaingment Mark </h1>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={200}
                    data={marksData}

                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="marks" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};

export default Statistics;

