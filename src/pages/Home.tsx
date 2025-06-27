import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { Item } from '../context/AppContext';
import ItemCard from '../pages/ItemCard'; 


// Enhanced Home Component
const Home = () => {
  const { items } = React.useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentItems, setRecentItems] = useState<Item[]>([]);

  useEffect(() => {
    const recent = items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
    setRecentItems(recent);
  }, [items]);

  const filteredItems = recentItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalLost: items.filter(item => item.status === 'lost' && !item.resolved).length,
    totalFound: items.filter(item => item.status === 'found' && !item.resolved).length,
    resolved: items.filter(item => item.resolved).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Lost & Found <span className="text-blue-600">Hub</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Quickly report or recover lost and found items within your educational institute.
          Stay organized, stay connected, reunite with your belongings.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-600">{stats.totalLost}</div>
            <div className="text-red-700 font-medium">Lost Items</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600">{stats.totalFound}</div>
            <div className="text-green-700 font-medium">Found Items</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600">{stats.resolved}</div>
            <div className="text-blue-700 font-medium">Reunited</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/lost"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            View Lost Items
          </Link>
          <Link
            to="/found"
            className="px-8 py-4 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            View Found Items
          </Link>
        </div>
      </div>

      {/* Recent Items Section */}
      {filteredItems.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Reports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
