"use client";
import React, { useEffect, useState } from "react";
import classes from "@components/TopNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@context/ThemeContext";

const handleScroll = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 100, // Adjust the offset as needed
      behavior: "smooth",
    });
  }
};

const TopNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(window.scrollY === 0); // Show when at the top
       
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={classes.nav}>
        <div className={`${classes.nav_title} ${isVisible ? "" : classes.hidden}`}></div>
        <div className={classes.nav_item_com}>
          <div className={classes.nav_items}>
            <Link
              className={classes.nav_items_a}
              href="#about"
              key={"#about"}
              onClick={handleScroll}
            >
              <p>About</p>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link
              className={classes.nav_items_a}
              href="#skills"
              key={"#skills"}
              onClick={handleScroll}
            >
              <p>Skills</p>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link
              className={classes.nav_items_a}
              href="#education"
              key={"#education"}
              onClick={handleScroll}
            >
              <p>Education</p>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link
              className={classes.nav_items_a}
              href="#contactMe"
              key={"#contactMe"}
              onClick={handleScroll}
            >
              <p>Contact Me</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
