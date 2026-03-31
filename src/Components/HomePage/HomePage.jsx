import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

import hero from "../../assets/hero.png"

const HomePage = () => {

    const appData = useLoaderData()
    
    return (
        <div className='flex flex-col items-center justify-center gap-6 mt-5 text-center'>
            {/* text */}
            <div className='max-w-xl'>
                <h2 className='font-bold text-3xl'>
                    We Build
                </h2>
                <h2 className='font-bold text-3xl'>
                    <span className='text-red-600'>Productive</span> Apps
                </h2>
                <p className='mt-4 text-gray-600'>
                   At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>

            {/* image */}
            <div>
                <img className='w-11/12 max-w-lg mx-auto' src={hero} alt="Hero" />
            </div>

            {/* purple banner */}
            {/* purple banner */}
            <div className="bg-purple-800 text-white w-full py-10 mt-10 w-screen"> 
            <h1 className="text-2xl font-bold text-center mb-6">
            Trusted By Millions, Built For You
            </h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 max-w-5xl mx-auto">
            <div className="text-center">
            <small className="uppercase text-sm">Total Downloads</small>
            <h2 className="text-3xl font-bold mt-2">29.6M</h2>
            <small className="text-gray-300">21% More Than Last Month</small>
        </div>
        <div className="text-center">
            <small className="uppercase text-sm">Total Reviews</small>
            <h2 className="text-3xl font-bold mt-2">906K</h2>
            <small className="text-gray-300">46% More Than Last Month</small>
        </div>
        <div className="text-center">
            <small className="uppercase text-sm">Active Apps</small>
            <h2 className="text-3xl font-bold mt-2">132+</h2>
            <small className="text-gray-300">31 More Will Come</small>
        </div>
    </div>
</div>

        {/* trending apps */}
        {/* trending apps */}
<div className="w-full mt-10">
    <div className="mb-6 text-center">
        <h1 className='text-2xl font-bold'>Trending Apps</h1>
        <small className="text-gray-600">Explore All The Trending Apps Built By Us</small>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {appData.slice(0,8).map(app => (
            <SingleApp key={app.id} app={app} />
        ))}
    </div>
</div>
        
        </div>
    );
};

export default HomePage;