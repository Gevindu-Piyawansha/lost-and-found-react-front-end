
import React from 'react';

export interface Item {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  status: 'lost' | 'found';
  reportedBy: string;
  contactInfo: string;
  imageUrl?: string;
  resolved: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'staff' | 'admin';
  avatar?: string;
}

export const mockItems: Item[] = [ /* your mock items here */ ];
export const mockUser: User = {
  id: 1,
  name: 'Gevindu Piyawansha',
  email: 'gevindu.piyawansha@gmail.com',
  role: 'student',
};

export const AppContext = React.createContext<{
  items: Item[];
  setItems: (items: Item[]) => void;
  user: User;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}>({
  items: [],
  setItems: () => {},
  user: mockUser,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
