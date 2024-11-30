"use client";
import React, { useState } from "react";
import classes from "@components/EducationSection.module.scss";
import { motion } from "framer-motion";

const EducationSection = () => {
  // const [isInView, setIsInView] = useState(false);
  return (
    <>
      <section className={classes.edSection} id="education">
      {/* <motion.div
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
        > */}
        <div className={classes.ed_header}>
          <div className={classes.title}>
            <p>Education</p>
          </div>
          <div className={classes.line_arrow}>
            <p>{"<"}</p>
            <div className={classes.line}></div>
            <p>{">"}</p>
          </div>
        </div>
        <div className={classes.ed_con}>
          <div className={classes.ed_cap}>
            <div className={classes.ed_cap_1}>
              <p>{"^"}</p>
            </div>
            <div className={classes.ed_cap_2}></div>
            <div className={classes.ed_cap_1}>
              <p>{"^"}</p>
            </div>
            <div className={classes.ed_cap_2}></div>
            <div className={classes.ed_cap_1}>
              <p>{"^"}</p>
            </div>
          </div>
          <div className={classes.ed_text_con}>
            <div className={classes.ed_text}>
              <div className={classes.ed_text_head}><p>{"BSc (Hons) Software Engineering"}</p></div>
              <div className={classes.ed_texts}><p>{"Cardiff Metropolitan University (Ongoing)"}</p></div>
            </div>
            <div className={classes.ed_text}>
              <div className={classes.ed_text_head}><p>{"Higher Diploma in Computing and Software Engineering"}</p></div>
              <div className={classes.ed_texts}><p>{"ICBT Campus, Sri Lanka"}</p></div>
            </div>
            <div className={classes.ed_text}>
              <div className={classes.ed_text_head}><p>{"Pre-Sea Training Course for Engine Rating"}</p></div>
              <div className={classes.ed_texts}><p>{"Successfully completed in 2023"}</p></div>
            </div>
          </div>
        </div>
        {/* </motion.div> */}
      </section>
    </>
  );
};

export default EducationSection;
