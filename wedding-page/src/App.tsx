import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import MenuPage from "./components/MenuPage";
import WelcomePage from "./components/WelcomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;