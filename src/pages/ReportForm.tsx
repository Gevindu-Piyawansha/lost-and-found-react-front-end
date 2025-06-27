import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Item } from '../context/AppContext';


// Enhanced Report Form Component
const ReportForm = ({ type }: { type: 'lost' | 'found' }) => {
    const { items, setItems } = React.useContext(AppContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        category: 'other',
        contactInfo: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const categories = ['electronics', 'bags', 'documents', 'accessories', 'clothing', 'keys', 'other'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { title, description, date, location, category, contactInfo } = formData;
        if (!title || !description || !date || !location || !contactInfo) {
            setError('Please fill in all required fields');
            setSuccess('');
            return;
        }

        const newItem: Item = {
            id: Date.now(),
            title,
            description,
            date,
            location,
            category,
            status: type,
            reportedBy: 'Current User',
            contactInfo,
            resolved: false
        };

        setItems([...items, newItem]);
        setError('');
        setSuccess(`${type === 'lost' ? 'Lost' : 'Found'} item reported successfully!`);

        setTimeout(() => {
            navigate(type === 'lost' ? '/lost' : '/found');
        }, 1500);
    };

    const title = type === 'lost' ? 'Report Lost Item' : 'Report Found Item';
    const bgColor = type === 'lost' ? 'from-red-50 to-white' : 'from-green-50 to-white';
    const buttonColor = type === 'lost' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700';

    return (
        <div className={`min-h-screen bg-gradient-to-br ${bgColor} py-8 px-4`}>
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-center mb-8">
                        Please provide as much detail as possible to help reunite items with their owners.
                    </p>

                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                    {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Item Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g., Black Wallet"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date {type === 'lost' ? 'Lost' : 'Found'} *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Where was it lost/found?"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information *</label>
                            <input
                                type="email"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                placeholder="your.email@university.edu"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Provide detailed description including colors, brand, distinguishing features, etc."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full ${buttonColor} text-white py-4 rounded-lg transition duration-200 font-semibold text-lg`}
                        >
                            Submit Report
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportForm;