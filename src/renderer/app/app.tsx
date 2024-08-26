// import React from 'react';
import './app.style.scss'; // Ensure SCSS is compiled and included
import icon from '@/assets/images/icon.png';
import { useNavigate } from 'react-router-dom';


import React from "react";


const App = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/readMe'); // Navigates to the ReadMe page
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto text-center">
                    <div className='header'>
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Welcome to ReactronBase
                        </h1>
                        <img src={icon} alt="Reactron Base" className="headerLogo" />
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                        A modern framework with React, Tailwind CSS, Electron, SCSS, and TypeScript.
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" className="logo" />
                        <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Tailwind CSS Logo" className="logo" />
                        <img src="https://download.logo.wine/logo/Electron_(software_framework)/Electron_(software_framework)-Logo.wine.png" alt="Electron Logo" className="logo" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Color.svg.png" alt="SCSS Logo" className="logo" />
                        <img src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png" alt="TypeScript Logo" className="logo" />
                    </div>

                    <p className="text-md text-gray-500 mb-4">
                        Start coding in:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg mx-auto text-lg">
                        <code>src/renderer/app/app.tsx</code>
                    </pre>
                    <button
                        onClick={handleClick}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Go to ReadMe
                    </button>
                    <p className="text-sm text-gray-400 mt-6">
                        Modify this file to begin building your application with ReactronBase.
                    </p>
                </div>
            </div>
        </>
    );
}


export default App;