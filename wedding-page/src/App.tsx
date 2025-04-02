import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import {
  WelcomePage,
  MenuPage,
  SeatingChart,
  Rsvp,
  Registry,
  Banner,
} from "./components";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Banner />
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/seating" element={<SeatingChart />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
