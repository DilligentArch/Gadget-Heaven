import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen max-w-screen-2xl bg-gray-100">
            <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
            <h2 className="text-5xl font-bold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2 mb-8 text-lg text-center">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>
            <button
                onClick={handleGoHome}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;
