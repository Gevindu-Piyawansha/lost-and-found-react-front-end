import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <div className="font-bold">Lost & Found</div>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/lost" className="hover:underline">Lost</Link>
                <Link to="/found" className="hover:underline">Found</Link>
                <Link to="/profile" className="hover:underline">Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;
