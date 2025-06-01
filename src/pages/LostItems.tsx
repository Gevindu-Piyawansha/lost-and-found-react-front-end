const LostItems = () => {
  // Placeholder item list
  const lostItems = [
    {
      id: 1,
      title: 'Black Backpack',
      description: 'Lost near cafeteria on May 21. Contains books and charger.',
      date: '2025-05-21',
    },
    {
      id: 2,
      title: 'Student ID Card',
      description: 'Name: John Doe. Lost in library.',
      date: '2025-05-20',
    },
    {
      id: 3,
      title: 'Blue Umbrella',
      description: 'Left in lecture hall A1 after class.',
      date: '2025-05-19',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Lost Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {lostItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-sm text-gray-400 mt-4">Reported on: {item.date}</p>
            <button
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert(`View details for: ${item.title}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostItems;
