import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, MessageCircle, MapPin, Calendar, User } from 'lucide-react';
import { Item } from '../context/AppContext';


// Enhanced Item Card Component
const ItemCard = ({ item }: { item: Item }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className={`h-2 ${item.status === 'lost' ? 'bg-red-500' : 'bg-green-500'}`}></div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'lost'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                        {item.status.toUpperCase()}
                    </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-2" />
                        {item.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <User size={14} className="mr-2" />
                        {item.reportedBy}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => navigate(`/item/${item.id}`)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 text-sm font-medium"
                    >
                        <Eye size={16} />
                        View Details
                    </button>
                    <button className="bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition">
                        <MessageCircle size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;