import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const Apps = () => {
    const data = useLoaderData();
    
    return (
        <div className='flex flex-col items-center'> 
            <div className="flex flex-col items-center">
                <h2 className='font-semibold text-2xl m-3'>Our All Applications</h2>
            <p className='text-base-400 mb-6'>Expolre all Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {
                    data.map(app=>(<SingleApp app={app}></SingleApp>))
                }
            </div>
        </div>
    );
};

export default Apps;