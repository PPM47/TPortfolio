"use client";
import React, { useState } from "react";
import classes from "@components/AboutSection.module.scss";
import { motion } from "framer-motion";

const AboutSection = () => {
  // const [isInView, setIsInView] = useState(false);
  return (
    <>
      <section className={classes.aboutSection} id="about">
        {/* <motion.div
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }}
           transition={{ duration: 0.8 }}
           onViewportEnter={() => setIsInView(true)}
           onViewportLeave={() => setIsInView(false)}
        > */}
        <div className={classes.about_header}>
          <div className={classes.title}>
            <p>About Me</p>
          </div>
          <div className={classes.line_arrow}>
            <p>{"<"}</p>
            <div className={classes.line}></div>
            <p>{">"}</p>
          </div>
        </div>
        <div className={classes.about_text_img}>
          <div className={classes.hero_image_con}>
            <div className={classes.hero_image_con_}></div>
          </div>
          <div className={classes.about_text_con}>
            <p>
              A highly motivated Software Developer Intern with a strong
              background in both front-end and back-end development. Passionate
              about solving complex problems, delivering high-quality software,
              and continuously learning new technologies. Currently pursuing a
              BSc (Hons) in Software Engineering at Cardiff Metropolitan
              University.
            </p>
          </div>
        </div>
        {/* </motion.div> */}
      </section>
    </>
  );
};

export default AboutSection;
