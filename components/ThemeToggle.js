"use client";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import classes from "@components/ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classes.toggle_con}>
      <button onClick={toggleTheme} className={classes.toggle_btn}>
        {/* {theme === "light" ? "": ""} */}

        <div
          className={`${classes.toggle_btn} ${
            theme === "dark" ? classes.light : classes.dark
          }`}
        >
          {" "}
          <div className={classes.toggle_dot}></div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
