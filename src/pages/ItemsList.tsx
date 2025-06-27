import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { Item } from '../context/AppContext';
import ItemCard from '../pages/ItemCard';


// Enhanced Items List Component
const ItemsList = ({ status }: { status: 'lost' | 'found' }) => {
    const { items } = React.useContext(AppContext);
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date');

    const categories = ['all', 'electronics', 'bags', 'documents', 'accessories', 'clothing', 'keys', 'other'];

    useEffect(() => {
        let filtered = items.filter(item => item.status === status && !item.resolved);

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (categoryFilter !== 'all') {
            filtered = filtered.filter(item => item.category === categoryFilter);
        }

        filtered.sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            } else if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        setFilteredItems(filtered);
    }, [items, status, searchTerm, categoryFilter, sortBy]);

    const title = status === 'lost' ? 'Lost Items' : 'Found Items';
    const bgColor = status === 'lost' ? 'from-red-50 to-white' : 'from-green-50 to-white';
    const titleColor = status === 'lost' ? 'text-red-600' : 'text-green-600';

    return (
        <div className={`min-h-screen bg-gradient-to-br ${bgColor} py-8 px-4`}>
            <div className="max-w-7xl mx-auto">
                <h1 className={`text-4xl font-bold ${titleColor} mb-8 text-center`}>
                    {title} ({filteredItems.length})
                </h1>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="date">Sort by Date</option>
                            <option value="title">Sort by Title</option>
                        </select>
                    </div>
                </div>

                {/* Items Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemsList;