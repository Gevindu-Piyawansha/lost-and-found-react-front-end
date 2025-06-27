import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, User } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { Item } from '../context/AppContext';


// Enhanced Item Details Component
const ItemDetails = () => {
    const { id } = useParams();
    const { items } = React.useContext(AppContext);
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        const foundItem = items.find(item => item.id === parseInt(id || '0'));
        setItem(foundItem || null);
    }, [id, items]);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">❓</div>
                    <h2 className="text-2xl font-bold text-gray-600">Item not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className={`h-2 ${item.status === 'lost' ? 'bg-red-500' : 'bg-green-500'}`}></div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h1>
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${item.status === 'lost'
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-green-100 text-green-700'
                                    }`}>
                                    {item.status.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                                <p className="text-gray-600 mb-6">{item.description}</p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="text-gray-400 mr-3" size={20} />
                                        <div>
                                            <div className="font-medium text-gray-800">Location</div>
                                            <div className="text-gray-600">{item.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Calendar className="text-gray-400 mr-3" size={20} />
                                        <div>
                                            <div className="font-medium text-gray-800">Date</div>
                                            <div className="text-gray-600">{new Date(item.date).toLocaleDateString()}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <User className="text-gray-400 mr-3" size={20} />
                                        <div>
                                            <div className="font-medium text-gray-800">Reported by</div>
                                            <div className="text-gray-600">{item.reportedBy}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                    <p className="text-gray-600 mb-2">Get in touch with the reporter:</p>
                                    <p className="font-medium text-blue-600">{item.contactInfo}</p>
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium">
                                        Contact Reporter
                                    </button>
                                    <button className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition font-medium">
                                        Mark as Resolved
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
