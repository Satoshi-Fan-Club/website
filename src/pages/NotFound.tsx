
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import SatoshiButton from '@/components/SatoshiButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-satoshi-orange mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Oops! Page not found</p>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <SatoshiButton>
              Return to Home
            </SatoshiButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
