import React, { useState } from "react";
import "./bar.css";

const Bar = ({ settings }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Discount code sent to ${email}`);
    setEmail("");
  };

  return (
    <div
      className="announcement-bar"
      style={{
        backgroundColor: settings.barBackground,
        padding: settings.barPadding,
      }}
    >
      <form onSubmit={handleSubmit} className="announcement-form">
        <span
          className="announcement-text"
          style={{
            color: settings.textColor,
            fontSize: settings.textSize,
            fontWeight: settings.textWeight,
          }}
        >
          Get your discount code!
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="announcement-input"
        />
        <button
          type="submit"
          className="announcement-button"
          style={{
            backgroundColor: settings.buttonBackground,
            color: settings.buttonColor,
            borderRadius: settings.buttonBorderRadius,
          }}
        >
          {settings.buttonText}
        </button>
      </form>
    </div>
  );
};

export default Bar;
