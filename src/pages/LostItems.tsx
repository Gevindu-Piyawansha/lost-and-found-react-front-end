import React, { useEffect, useState } from 'react';
import { fetchLostItems, LostItem } from '../api/api';

const LostItems = () => {
  const [items, setItems] = useState<LostItem[]>([]);

  useEffect(() => {
    fetchLostItems().then(data => setItems(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lost Items</h2>
      {items.length === 0 ? (
        <p>No lost items found.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>{item.description}</p>
              <p className="text-sm text-gray-500">Date Lost: {item.dateLost}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LostItems;