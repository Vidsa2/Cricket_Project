import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LiveScore from './pages/LiveScore/LiveScore'; // Adjust the path if needed
import Results from './pages/Results/Results'; // Adjust the path if needed
import UpComingMatches from './pages/UpComingMatches/UpComingMatches'; // Adjust the path if needed

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livescore" element={<LiveScore />} />
        <Route path="/result" element={<Results />} />
        <Route path="/upcomingmatches" element={<UpComingMatches />} />
      </Routes>
    </div>
  );
};

export default App;
