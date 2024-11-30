"use client";
import React, { useState } from "react";
import classes from "@components/ProjectSection.module.scss";
import { motion } from "framer-motion";

const ProjectSection = () => {
  // const [isInView, setIsInView] = useState(false);
  return (
    <>
      <section className={classes.pSection} id="project">
        {/* <motion.div

          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }} // Move back off-screen if not in view
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
        >  */}
          <div className={classes.p_header}>
            <div className={classes.title}>
              <p>Projects</p>
            </div>
            <div className={classes.line_arrow}>
              <p>{"<"}</p>
              <div className={classes.line}></div>
              <p>{">"}</p>
            </div>
          </div>
          <div className={classes.p_con}>
            <div className={classes.p_cap}>
              <div className={classes.p_cap_1}>
                <p>{"^"}</p>
              </div>
              <div className={classes.p_cap_2}></div>
              <div className={classes.p_cap_1}>
                <p>{"^"}</p>
              </div>
            </div>
            <div className={classes.p_text_con}>
              <div className={classes.p_text}>
                <div className={classes.p_text_head}>
                  <p>{"Final Year Project: E-Tech System"}</p>
                </div>
                <div className={classes.p_texts}>
                  <p>
                    {
                      "A full-stack e-commerce web application developp for personalizp product recommendations."
                    }
                  </p>
                </div>
                <div className={classes.p_techs}>
                  <div className={classes.p_techs_title}>
                    <p>Technologies</p>
                    <p className={classes.arrow}>{"->"}</p>
                  </div>

                  <div className={classes.skills}>
                    <div className={classes.skill}>
                      <p>NextJS</p>
                    </div>
                    <div className={classes.skill}>
                      <p>React</p>
                    </div>
                    <div className={classes.skill}>
                      <p>Python (ML)</p>
                    </div>

                    <div className={classes.skill}>
                      <p>MongoDB</p>
                    </div>
                    <div className={classes.skill}>
                      <p>Stripe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.p_text}>
                <div className={classes.p_text_head}>
                  <p>{"Internship at IF Solutions"}</p>
                </div>
                <div className={classes.p_texts}>
                  <p>
                    {
                      "Workp as a Frontend Developer, contributing to web development projects."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </motion.div> */}
      </section>
    </>
  );
};

export default ProjectSection;
