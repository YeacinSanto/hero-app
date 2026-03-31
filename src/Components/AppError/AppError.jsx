import React from 'react';
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-1/3' src="/assets/App-Error.png" alt="" />
            <h2 className='font-bold text-2xl mt-3'>Oops, App not found!</h2>
            <div className="text-gray-400 mb-3"><small>The App you are looking for is not available.</small></div>
            <Link to='/app' className='btn btn-success'>Go Back!</Link>
        </div>
    );
};

export default AppError;