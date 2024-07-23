import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppProvider, Frame, Navigation, TopBar } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import Bar from "./components/Bar";
import Admin from "./components/Admin";

import "./App.css";

function AppContent() {
  const [settings, setSettings] = useState({
    barBackground: "#f0f0f0",
    barPadding: "10px",
    barPosition: "top",
    textColor: "#000000",
    textSize: "16px",
    textWeight: "normal",
    buttonBackground: "#4CAF50",
    buttonColor: "#ffffff",
    buttonText: "Get Discount",
    buttonBorderRadius: "4px",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleSettingsChange = useCallback((newSettings) => {
    setSettings(newSettings);
  }, []);

  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            label: "Store Front",
            url: "/",
            onClick: () => navigate("/"),
          },
          {
            label: "Admin Panel",
            url: "/admin",
            onClick: () => navigate("/admin"),
          },
        ]}
      />
    </Navigation>
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    url: "/",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <Frame
      logo={logo}
      topBar={<TopBar showNavigationToggle />}
      navigation={navigationMarkup}
    >
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Bar settings={settings} />} />
          <Route
            path="/admin"
            element={
              <Admin
                initialSettings={settings}
                onSettingsChange={handleSettingsChange}
              />
            }
          />
        </Routes>
      </div>
    </Frame>
  );
}

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
