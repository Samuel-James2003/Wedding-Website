import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { WelcomePage, MenuPage, SeatingChart } from "./components"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/seating" element={<SeatingChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;