"use client";
import React, { useState } from "react";
import classes from "@components/SideNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@context/ThemeContext";
import { motion } from "framer-motion";

const handleScroll = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const yOffset = -100; // Offset for sticky header or additional spacing
    const yPosition =
      targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  }
};

const SideNav = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`${classes.nav} ${toggle ? classes.expanded : ""}`}>
        <div className={classes.con_0}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            >
              <div className={classes.side_menu_toggle}>
                <div
                  className={classes.toggle_btn}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  <p>{toggle ? "<-" : "->"}</p>
                </div>
              </div>
            </motion.button>
          </motion.div>
          {theme === "light" ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={classes.social_media_con}>
                  <Link href="https://www.facebook.com/profile.php?id=100022939311055&mibextid=ZbWKwL">
                    <Image
                      src="/image/fb-black.webp"
                      width={35}
                      height={35}
                      alt="Facebook"
                    />
                  </Link>

                  {/* <Link href="https://github.com/PPM47">
                    <Image
                      src="/image/gh-d.webp"
                      width={35}
                      height={35}
                      alt="GitHub"
                    />
                  </Link> */}

                  <Link href="https://www.linkedin.com/in/pavan-malshan-50493920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Image
                      src="/image/in-black.webp"
                      width={35}
                      height={35}
                      alt="LinkedIn"
                    />
                  </Link>
                  <ThemeToggle />
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={classes.social_media_con}>
                  <Link href="https://www.facebook.com/profile.php?id=100022939311055&mibextid=ZbWKwL">
                    <Image
                      src="/image/fb-w.webp"
                      width={35}
                      height={35}
                      alt="Facebook"
                    />
                  </Link>

                  {/* <Link href="https://github.com/PPM47">
                    <Image
                      src="/image/gh-w.png"
                      width={35}
                      height={35}
                      alt="GitHub"
                    />
                  </Link> */}

                  <Link href="https://www.linkedin.com/in/pavan-malshan-50493920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Image
                      src="/image/in-w.webp"
                      width={35}
                      height={35}
                      alt="LinkedIn"
                    />
                  </Link>
                  <ThemeToggle />
                </div>
              </motion.div>
            </>
          )}
        </div>
        <div className={`${toggle ? classes.visible : classes.con_1}`}>
          <div className={classes.nav_item_com}>
            <div className={classes.nav_items}>
              <Link
                className={classes.nav_items_a}
                href="#about"
                key={"#about"}
                onClick={() => {
                  setToggle(false);
                  handleScroll;
                }}
              >
                <p>About</p>
              </Link>
            </div>
            <div className={classes.nav_items}>
              <Link
                className={classes.nav_items_a}
                href="#skills"
                key={"#skills"}
                onClick={() => {
                  setToggle(false);
                  handleScroll;
                }}
              >
                <p>Skills</p>
              </Link>
            </div>
            <div className={classes.nav_items}>
              <Link
                className={classes.nav_items_a}
                href="#education"
                key={"#education"}
                onClick={() => {
                  setToggle(false);
                  handleScroll;
                }}
              >
                <p>Education</p>
              </Link>
            </div>
            <div className={classes.nav_items}>
              <Link
                className={classes.nav_items_a}
                href="#project"
                key={"#project"}
                onClick={() => {
                  setToggle(false);
                  handleScroll;
                }}
              >
                <p>Projects</p>
              </Link>
            </div>
            <div className={classes.nav_items}>
              <Link
                className={classes.nav_items_a}
                href="#contactMe"
                key={"#contactMe"}
                onClick={() => {
                  setToggle(false);
                  handleScroll;
                }}
              >
                <p>Contact Me</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${toggle ? classes.visible : classes.con_2}`}></div>
      </nav>
    </>
  );
};

export default SideNav;
