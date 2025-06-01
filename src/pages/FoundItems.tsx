const FoundItems = () => {
  const foundItems = [
    {
      id: 1,
      title: 'Keychain',
      description: 'Set of keys with a red tag found in Parking Lot B.',
      date: '2025-05-22',
    },
    {
      id: 2,
      title: 'Black Hoodie',
      description: 'Left behind in the gym locker room.',
      date: '2025-05-20',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Found Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {foundItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-sm text-gray-400 mt-4">Found on: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundItems;
