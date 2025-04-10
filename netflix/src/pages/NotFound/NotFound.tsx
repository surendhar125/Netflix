const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Oops! Page not found.</p>
      <p className="text-gray-400 mb-6 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-medium">
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
