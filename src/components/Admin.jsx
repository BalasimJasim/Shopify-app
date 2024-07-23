import React, { useState, useEffect } from "react";
import { Card, FormLayout, TextField, Select, Button } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const Admin = ({ onSettingsChange, initialSettings }) => {
  const [settings, setSettings] = useState(initialSettings);
  const navigate = useNavigate();

  useEffect(() => {
    setSettings(initialSettings);
  }, [initialSettings]);

  const handleChange = (field) => (value) => {
    setSettings((prevSettings) => ({ ...prevSettings, [field]: value }));
  };

  const handleSave = () => {
    onSettingsChange(settings);
    navigate("/");
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
        <Select
          label="Text Weight"
          options={[
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
          ]}
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
