
import { StarHalf } from 'lucide';
import React from 'react';

const InstalledAppItems = ({ app, onUninstall }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md">
      <div className="flex items-center gap-4">
        <div className="image w-1/5 ">
          <img className="w-full h-full object-cover rounded-xl" src={app.image} alt={app.title} />
        </div>
        <div className="nameInfo">
          <h2 className="text-lg font-semibold">{app.title}</h2>
          <div className="flex gap-4 mt-1 text-gray-500 text-sm">
            <span>{app.downloads} downloads</span>
            <span>{app.ratingAvg} rating </span>
            <span>{app.size}MB</span>
          </div>
        </div>
      </div>

      {/* Uninstall Button */}
      <div className="button">
        <button
          onClick={onUninstall}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppItems;