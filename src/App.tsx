import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import LostItems from './pages/LostItems';
import FoundItems from './pages/FoundItems';
import ReportLostItem from './pages/ReportLostItem';
import ReportFoundItem from './pages/ReportFoundItem';
import ItemDetails from './pages/ItemDetails';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile'; // Optional
import ItemsList from './pages/ItemsList';

import { AppContext, mockItems, mockUser, Item } from './context/AppContext';

const App = () => {
  const [items, setItems] = useState<Item[]>(mockItems);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ items, setItems, user: mockUser, isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<ItemsList status="lost" />} />
          <Route path="/found" element={<ItemsList status="found" />} />
          <Route path="/report-lost" element={<ReportLostItem />} />
          <Route path="/report-found" element={<ReportFoundItem />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
