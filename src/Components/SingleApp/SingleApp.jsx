import React from 'react';

const SingleApp = ({ app }) => {
  return (
    <div className="card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center">
      
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
          <span className="font-medium">{app.ratingAvg} ★</span>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;