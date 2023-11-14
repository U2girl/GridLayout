import React from 'react';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';
import AverageRating from './components/AverageRating';


function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
   
    </div>
  );
}

export default App;
