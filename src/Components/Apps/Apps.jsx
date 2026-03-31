import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const Apps = () => {
    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-2xl m-3">Our All Applications</h2>
                <p className="text-base-400 mb-6">
                    Explore all Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* Apps count + Search bar on the same row */}
            <div className="flex justify-between items-center w-full max-w-6xl mb-6 px-4">
                {/* Left side: Apps count */}
                <div className="text-lg font-semibold">
                    Apps: <span className="text-accent">{data.length}</span>
                </div>

                {/* Right side: Search bar + button */}
                <div className="flex">
                    <input
                        className="border rounded-l-sm px-3 py-2"
                        type="text"
                        placeholder="Search"
                    />
                    <button className="btn btn-accent rounded-r-sm px-4">
                        Search
                    </button>
                </div>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {data.map((app) => (
                    <SingleApp key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;