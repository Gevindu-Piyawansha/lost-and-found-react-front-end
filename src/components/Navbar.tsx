import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, User, ChevronDown } from 'lucide-react';
import { AppContext } from '../context/AppContext';


const Navbar = () => {
    const { user, isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                        🔍 Lost & Found
                    </Link>

                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1">
                            <span>Home</span>
                        </Link>
                        <Link to="/lost" className="text-gray-700 hover:text-blue-600 transition">
                            Lost Items
                        </Link>
                        <Link to="/found" className="text-gray-700 hover:text-green-600 transition">
                            Found Items
                        </Link>
                        <Link to="/my-reports" className="text-gray-700 hover:text-purple-600 transition">
                            My Reports
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/report-lost"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium"
                        >
                            <Plus size={16} />
                            Report Lost
                        </Link>
                        <Link
                            to="/report-found"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 text-sm font-medium"
                        >
                            <Plus size={16} />
                            Report Found
                        </Link>

                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition"
                                >
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <User size={16} className="text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium">{user.name.split(' ')[0]}</span>
                                    <ChevronDown size={16} />
                                </button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Profile
                                        </Link>
                                        <Link to="/my-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            My Reports
                                        </Link>
                                        <hr className="my-2" />
                                        <button
                                            onClick={() => setIsAuthenticated(false)}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
