import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({ app }) => {
  return (
    <Link to={`/app/appDetails/${app.id}`}>
      <div className="card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center">
        {/* App Image */}
        <img
          className="w-2/4 object-contain mb-4"
          src={app.image}  
          alt={app.title}
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{app.title}</h2>
          <p className="text-gray-600 text-sm">{app.description}</p>
        </div>

        <div className="flex justify-around w-full mt-4 border-t pt-3 text-gray-700">
          <div>
            <small className="block text-xs text-gray-400">Downloads</small>
            <span className="font-medium">{app.downloads}</span>
          </div>
          <div>
            <small className="block text-xs text-gray-400">Rating</small>
            <div className="flex justify-center gap-2 items-center">
              <h6 className="font-medium">{app.ratingAvg}</h6>
              <img className='w-5 h-5' src='/assets/icon-ratings.png' alt="Rating icon" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;