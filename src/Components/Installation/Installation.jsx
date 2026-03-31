import React, { useEffect, useState } from "react";
import InstalledAppItems from "./InstalledAppItems";

const InstallationPage = () => {
    const [installedApps, setInstalledApps] = useState([]);

    
    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        setInstalledApps(apps);
    }, []);

    // Handler to uninstall an app
    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps); // update state
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    };

    if (installedApps.length === 0) {
        return <p className="text-center mt-10">No apps installed yet.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="font-bold text-2xl text-center mb-4">Installed Apps</div>
            <div className="grid grid-cols-1 gap-6">
                {installedApps.map(app => (
                    <InstalledAppItems 
                        key={app.id} 
                        app={app} 
                        onUninstall={() => handleUninstall(app.id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default InstallationPage;