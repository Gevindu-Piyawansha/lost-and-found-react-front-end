const Profile = () => {
    const user = {
        name: 'Gevindu Piyawansha',
        email: 'gevindu.piyawansha@gmail.com',
        role: 'Student',
        registered: '2025-01-10',
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">My Profile</h2>
                <div className="space-y-3 text-gray-700 text-sm">
                    <div><span className="font-semibold">Name:</span> {user.name}</div>
                    <div><span className="font-semibold">Email:</span> {user.email}</div>
                    <div><span className="font-semibold">Role:</span> {user.role}</div>
                    <div><span className="font-semibold">Joined On:</span> {user.registered}</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
