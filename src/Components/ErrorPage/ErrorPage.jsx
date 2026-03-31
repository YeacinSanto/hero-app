import React from 'react';
import { Link } from 'react-router';
import errorPage from "/assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-1/3' src={errorPage} alt="" />
            <h2 className='font-bold text-2xl mt-3'>Oops, page not found!</h2>
            <div className="text-gray-400 mb-3"><small>The page you are looking for is not available.</small></div>
            <Link to='/' className='btn btn-success'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;