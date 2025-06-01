import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">Lost & Found</div>
                <div className="space-x-6 text-sm font-medium">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                    <Link to="/lost" className="text-gray-700 hover:text-blue-500">Lost</Link>
                    <Link to="/found" className="text-gray-700 hover:text-blue-500">Found</Link>
                    <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
                </div>
                <Link to="/report-lost" className="hover:text-blue-500">
                    Report Lost
                </Link>
                <Link to="/report-found" className="hover:text-green-500">
                    Report Found
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
