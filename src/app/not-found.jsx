import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#D72050]">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-white bg-[#D72050] rounded-xl shadow hover:bg-[#9f1036] transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
    );
};

export default NotFoundPage;