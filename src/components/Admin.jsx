import React, { useState } from "react";
import { Card, FormLayout, TextField, Select, Button } from "@shopify/polaris";

const Admin = ({ onSettingsChange }) => {
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

  const handleChange = (field) => (value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSave = () => {
    onSettingsChange(settings);
  };

  return (
    <Card sectioned>
      <FormLayout>
        <TextField
          label="Bar Background"
          value={settings.barBackground}
          onChange={handleChange("barBackground")}
        />
        <TextField
          label="Bar Padding"
          value={settings.barPadding}
          onChange={handleChange("barPadding")}
        />
        <Select
          label="Bar Position"
          options={[
            { label: "Top", value: "top" },
            { label: "Bottom", value: "bottom" },
          ]}
          value={settings.barPosition}
          onChange={handleChange("barPosition")}
        />
        <TextField
          label="Text Color"
          value={settings.textColor}
          onChange={handleChange("textColor")}
        />
        <TextField
          label="Text Size"
          value={settings.textSize}
          onChange={handleChange("textSize")}
        />
        <TextField
          label="Text Weight"
          value={settings.textWeight}
          onChange={handleChange("textWeight")}
        />
        <TextField
          label="Button Background"
          value={settings.buttonBackground}
          onChange={handleChange("buttonBackground")}
        />
        <TextField
          label="Button Color"
          value={settings.buttonColor}
          onChange={handleChange("buttonColor")}
        />
        <TextField
          label="Button Text"
          value={settings.buttonText}
          onChange={handleChange("buttonText")}
        />
        <TextField
          label="Button Border Radius"
          value={settings.buttonBorderRadius}
          onChange={handleChange("buttonBorderRadius")}
        />
        <Button onClick={handleSave}>Save Settings</Button>
      </FormLayout>
    </Card>
  );
};

export default Admin;
