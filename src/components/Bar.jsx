import React, { useState } from "react";

const AnnouncementBar = ({ settings }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Discount code sent to ${email}`);
    setEmail("");
  };

  const barStyle = {
    backgroundColor: settings.barBackground,
    padding: settings.barPadding,
    position: "fixed",
    [settings.barPosition]: 0,
    left: 0,
    right: 0,
  };

  const textStyle = {
    color: settings.textColor,
    fontSize: settings.textSize,
    fontWeight: settings.textWeight,
  };

  const buttonStyle = {
    backgroundColor: settings.buttonBackground,
    color: settings.buttonColor,
    borderRadius: settings.buttonBorderRadius,
  };

  return (
    <div style={barStyle}>
      <form onSubmit={handleSubmit}>
        <span style={textStyle}>Get your discount code!</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" style={buttonStyle}>
          {settings.buttonText}
        </button>
      </form>
    </div>
  );
};

export default AnnouncementBar;
