import { useEffect, useState } from "react";

type DashboardStats = {
    totalItems: number;
    lostItems: number;
    foundItems: number;
    returnedItems: number;
    totalRequests: number;
    pendingRequests: number;
    approvedRequests: number;
    rejectedRequests: number;
    totalUsers: number;
};

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);

    useEffect(() => {
        fetch("http://localhost:9095/api/dashboard/stats")
            .then((res) => res.json())
            .then((data) => setStats(data))
            .catch((err) => console.error("Failed to load stats", err));
    }, []);

    if (!stats) return <p className="text-gray-600">Loading stats...</p>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Dashboard Stats</h1>
            <div className="grid grid-cols-2 gap-4">
                <p>Total Items: {stats.totalItems}</p>
                <p>Lost Items: {stats.lostItems}</p>
                <p>Found Items: {stats.foundItems}</p>
                <p>Returned Items: {stats.returnedItems}</p>
                <p>Total Requests: {stats.totalRequests}</p>
                <p>Pending Requests: {stats.pendingRequests}</p>
                <p>Approved Requests: {stats.approvedRequests}</p>
                <p>Rejected Requests: {stats.rejectedRequests}</p>
                <p>Total Users: {stats.totalUsers}</p>
            </div>
        </div>
    );
}
