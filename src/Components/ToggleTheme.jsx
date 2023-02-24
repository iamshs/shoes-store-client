import React from "react";
import "../styles/ToggleTheme.css";

const ToggleTheme = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "dark");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={selectedTheme === "dark"}
        onChange={toggleTheme}
      />
      <span />
      <strong></strong>
    </label>
  );
};

export default ToggleTheme;
