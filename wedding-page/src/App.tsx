import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { WelcomePage, MenuPage, SeatingChart, Rsvp, Registry, Banner, FAQ, Schedule } from "./components"

const App: React.FC = () => {
  // Get the base URL from the environment variable or default to '/'
  // This is useful for deploying the app to a subdirectory
  // For example, if the app is deployed to 'https://example.com/my-app', set PUBLIC_URL='/my-app'
  // If the app is deployed to 'https://example.com/', set PUBLIC_URL='/'
const publicUrl: string = process.env.PUBLIC_URL || '/';
const base: string = publicUrl === '.' ? '/' : publicUrl;
  return (
    
    <Router basename={base}>
      <Banner />
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/seating" element={<SeatingChart />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
