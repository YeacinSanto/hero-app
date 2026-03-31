import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    // Find the current app first
    const app = data.find(app => app.id == id);

    if (!app) {
        return <p className="text-center mt-10">App not found</p>;
    }

    // Initialize button state based on localStorage
    const [clicked, setClicked] = useState(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        return installedApps.some(a => a.id === id); // true if already installed
    });

    const handleOnClicked = () => {
        setClicked(true);

        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        const isAlreadyInstalled = installedApps.some(a => a.id === app.id);

        if (!isAlreadyInstalled) {
            installedApps.push(app); // add current app
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }
    };

    // Calculate total ratings
    const totalRatings = app.ratings.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* App Image */}
                <div className="bg-gray-100 p-6 rounded-xl">
                    <img 
                        className="w-40 h-40 object-contain"
                        src={app.image} 
                        alt={app.title} 
                    />
                </div>

                {/* App Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{app.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Developed by{" "}
                        <span className="text-purple-600 font-medium">
                            {app.companyName}
                        </span>
                    </p>

                    {/* Stats */}
                    <div className="flex gap-10 mt-6 text-center">
                        <div>
                            <p className="text-gray-500 text-sm">Downloads</p>
                            <h2 className="text-xl font-bold">{app.downloads}</h2>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Average Rating</p>
                            <h2 className="text-xl font-bold">{app.ratingAvg}</h2>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                            <h2 className="text-xl font-bold">{app.reviews}</h2>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleOnClicked}
                        className={`mt-6 px-6 py-2 rounded-lg transition ${
                            clicked
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                        disabled={clicked}
                    >
                        {clicked ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-10" />

            {/* Ratings Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Ratings</h2>
                {[...app.ratings].reverse().map((item, index) => {
                    const percentage = (item.count / totalRatings) * 100;

                    return (
                        <div key={index} className="flex items-center gap-4 mb-2">
                            <span className="w-16 text-sm">{item.name}</span>
                            <div className="w-full bg-gray-200 h-3 rounded">
                                <div
                                    className={`h-3 rounded ${
                                        item.name === "5 star" ? "bg-green-500" :
                                        item.name === "4 star" ? "bg-lime-500" :
                                        item.name === "3 star" ? "bg-yellow-500" :
                                        item.name === "2 star" ? "bg-orange-400" :
                                        "bg-red-500"
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                            <span className="text-sm text-gray-500 w-12">{item.count}</span>
                        </div>
                    );
                })}
            </div>

            {/* Divider */}
            <hr className="my-10" />

            {/* Description */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;