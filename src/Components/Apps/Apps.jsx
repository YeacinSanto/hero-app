import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const Apps = () => {
  const data = useLoaderData();
  const [searchApp, setSearchApp] = useState('');

  const handleSubmit = (e) => e.preventDefault();

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(searchApp.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="font-bold text-3xl mb-3">Our All Applications</h2>
        <p className="text-gray-500 max-w-2xl">
          Explore all Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-4 mb-8">
        <div className="text-lg font-semibold">
          Apps Found: <span className="text-accent">{filteredApps.length}</span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by app name..."
            value={searchApp}
            onChange={(e) => setSearchApp(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-l-lg w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-white px-5 py-2 rounded-r-lg hover:opacity-90 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Apps / No Result */}
      {filteredApps.length === 0 ? (
        <div className="mt-10 text-center">
          <img src='/assets/error-404.png' alt="Not found" />
          <h2 className='text-xl font-bold'>Oops, App not found!</h2>
          <p className="text-gray-400">
            Try searching with another app name.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {filteredApps.map(app => (
            <SingleApp key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;