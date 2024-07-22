import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import Bar from "./components/Bar";
import Admin from "./components/Admin";

import "./App.css";

function App() {
  const [settings, setSettings] = useState({
    barBackground: "#f0f0f0",
    barPadding: "10px",
    barPosition: "center",
    textColor: "#000000",
    textSize: "16px",
    textWeight: "normal",
    buttonBackground: "#4CAF50",
    buttonColor: "#ffffff",
    buttonText: "Get Discount",
    buttonBorderRadius: "4px",
  });

  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <div className="app-container">
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">Store Front</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin">Admin Panel</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Bar settings={settings} />} />
            <Route
              path="/admin"
              element={<Admin onSettingsChange={setSettings} />}
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
