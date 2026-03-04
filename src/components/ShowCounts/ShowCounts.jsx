import React from 'react';
import './ShowCounts.css';
const ShowCounts = ({inProgressProblems, resolveProblems}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10 max-w-[1200px] mx-auto text-center'>
            <div className='hero-section1 py-20 text-white rounded-xl'>
                <h3 className='text-2xl '>In Progress</h3>
                <p className='text-6xl font-bold '>{inProgressProblems.length}</p>
            </div>
            <div className='hero-bg py-20 text-white rounded-xl'>
                <h3 className='text-2xl '>Resolved</h3>
                <p className='text-6xl font-bold '>{resolveProblems.length}</p>
            </div>
        </div>
    );
};

export default ShowCounts;