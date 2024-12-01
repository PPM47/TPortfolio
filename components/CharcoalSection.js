"use client";
import React, { useState } from "react";
import classes from "@components/CharcoalSection.module.scss";
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
            <p>Where Charcoal Meets Soul</p>
          </div>
          <div className={classes.about_text_con}>
            <p>
              Experience the depth of emotions and intricate detail brought to
              life through the artistry of Thuthini Silva. Turning your memories
              into timeless masterpieces.
            </p>
          </div>
          <div className={classes.hero_res_con}>
            <div className={classes.resume_btn_con}>
              <button
                className={classes.resume_button}
                onClick={() =>
                  window.open("/files/PPavanMalshan.pdf", "_blank")
                }
              >
                <p>Pricing</p>
                <p className={classes.hero_arrow}>{"->"}</p>
              </button>
            </div>
            <div className={classes.contact_btn_con}>
              <a className={classes.contact_button} href="#gallery">
                <p>View Gallery</p>

                <p className={classes.hero_arrow}>{"->"}</p>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.about_text_img}>
          <div className={classes.hero_image_con}>
            <div className={classes.hero_image_con_}></div>
          </div>
        </div>
        {/* </motion.div> */}
      </section>
    </>
  );
};

export default AboutSection;
