const API_URL = process.env.REACT_APP_API_URL;

// Define types for your data
export interface LostItem {
    id?: number;
    name: string;
    description: string;
    dateLost: string;
    // Add other fields as needed
}

export interface FoundItem {
    id?: number;
    name: string;
    description: string;
    dateFound: string;
    // Add other fields as needed
}

// Fetch all lost items
export const fetchLostItems = async (): Promise<LostItem[]> => {
    const res = await fetch(`${API_URL}/api/lost-items`);
    return res.json();
};

// Fetch all found items
export const fetchFoundItems = async (): Promise<FoundItem[]> => {
    const res = await fetch(`${API_URL}/api/found-items`);
    return res.json();
};

// Report a lost item
export const reportLostItem = async (itemData: LostItem): Promise<LostItem> => {
    const res = await fetch(`${API_URL}/api/lost-items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
    });
    return res.json();
};

// Report a found item
export const reportFoundItem = async (itemData: FoundItem): Promise<FoundItem> => {
    const res = await fetch(`${API_URL}/api/found-items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
    });
    return res.json();
};

// Add more API functions and types as needed