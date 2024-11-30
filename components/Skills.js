"use client";
import React, { useState } from "react";
import classes from "@components/Skills.module.scss";
import { motion } from "framer-motion";

const Skills = () => {
  // const [isInView, setIsInView] = useState(false);
  return (
    <>
      <section className={classes.skillSection} id="skills">
        {/* <motion.div
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Move back off-screen if not in view
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
        > */}
          <div className={classes.skill_header}>
            <div className={classes.title}>
              <p>Skills</p>
            </div>
            <div className={classes.line_arrow}>
              <p>{"<"}</p>
              <div className={classes.line}></div>
              <p>{">"}</p>
            </div>
          </div>
          <div className={classes.skill_set_con}>
            <div className={classes.skill_sets}>
              <div className={classes.skill_set_title}>
                <p>Programming Languages</p>
                <p className={classes.arrow}>{"->"}</p>
              </div>
              <div className={classes.skills}>
                <div className={classes.skill}>
                  <p>JavaScript</p>
                </div>
                <div className={classes.skill}>
                  <p>HTML</p>
                </div>
                <div className={classes.skill}>
                  <p>TypeScript</p>
                </div>
                <div className={classes.skill}>
                  <p>SCSS/CSS</p>
                </div>
                <div className={classes.skill}>
                  <p>Python (Machine Learning)</p>
                </div>
                <div className={classes.skill}>
                  <p>Java</p>
                </div>
              </div>
            </div>
            <div className={classes.skill_sets}>
              <div className={classes.skill_set_title}>
                <p>Frameworks and Tools</p>
                <p className={classes.arrow}>{"->"}</p>
              </div>
              <div className={classes.skills}>
                <div className={classes.skill}>
                  <p>NextJS</p>
                </div>
                <div className={classes.skill}>
                  <p>Spring Boot</p>
                </div>
                <div className={classes.skill}>
                  <p>Payload</p>
                </div>
                <div className={classes.skill}>
                  <p>TailwindCSS</p>
                </div>
                <div className={classes.skill}>
                  <p>Bootstrap</p>
                </div>
                <div className={classes.skill}>
                  <p>MongoDB</p>
                </div>
                <div className={classes.skill}>
                  <p>Docker</p>
                </div>
              </div>
            </div>
            <div className={classes.skill_sets}>
              <div className={classes.skill_set_title}>
                <p>Design Tools</p>
                <p className={classes.arrow}>{"->"}</p>
              </div>
              <div className={classes.skills}>
                <div className={classes.skill}>
                  <p>Adobe Illustrator</p>
                </div>
                <div className={classes.skill}>
                  <p>Adobe Photoshop</p>
                </div>
                <div className={classes.skill}>
                  <p>Adobe XD</p>
                </div>
                <div className={classes.skill}>
                  <p>Figma</p>
                </div>
              </div>
            </div>
          </div>
        {/* </motion.div> */}
      </section>
    </>
  );
};

export default Skills;
