const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Welcome to the Lost & Found System
      </h1>
      <p className="text-gray-600 max-w-xl text-lg mb-8">
        Quickly report or recover lost and found items within your educational institute.
        Stay organized, stay connected.
      </p>
      <div className="flex gap-4">
        <a
          href="/lost"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Lost Items
        </a>
        <a
          href="/found"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          View Found Items
        </a>
      </div>
    </div>
  );
};

export default Home;
