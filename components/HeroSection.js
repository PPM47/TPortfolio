"use client";
import React from "react";
import classes from "@components/HeroSection.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className={classes.hero_section}>
        <section className={classes.hero_section_image}>
          <div className={classes.placeholder}></div>
          <div className={classes.hero_image_con}>
            <div className={classes.hero_image_con_}></div>
          </div>
        </section>
        <section className={classes.hero_section_text}>
          <div className={classes.hero_name}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={classes.hero_first_n}>
                <p>Thuthini Silva</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          <div className={classes.hero_cription}>
            <div className={classes.hero_text}>
              {/* <div className={classes.text_sape_align_con}></div> */}
              <p>
                Welcome to the artistic world of Thuthini Silva, a talented
                charcoal portrait artist known for capturing raw emotion and
                unparalleled detail. Thuthini's passion lies in bringing life to
                paper, crafting each portrait with meticulous care and
                creativity. Every piece tells a story, blending realism with an
                artistic touch that leaves a lasting impression.
              </p>
            </div>
            <div className={classes.hero_res_con}>
              <div className={classes.resume_btn_con}>
                <div className={classes.resume_button}>
                  <Link href="tel:+94772445114">
                    <p>WhatsApp</p>
                  </Link>

                  <p className={classes.hero_arrow}>{"->"}</p>
                </div>
              </div>
              <div className={classes.contact_btn_con}>
                <a className={classes.contact_button} href="#contactMe">
                  <p>Contact Me</p>

                  <p className={classes.hero_arrow}>{"->"}</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
