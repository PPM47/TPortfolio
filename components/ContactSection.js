"use client";
import React from "react";
import classes from "@components/ContactSection.module.scss";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className={classes.contactsSec} id="contactMe">
      <section className={classes.contactsSection}>
        <div className={classes.contacts_header}>
          <div className={classes.title}>
            <p>Contact Me</p>
          </div>
          <div className={classes.line_arrow}>
            <p>{"<"}</p>
            <div className={classes.line}></div>
            <p>{">"}</p>
          </div>
        </div>
        <div className={classes.contacts_con}>
          <div className={classes.contact}>
            <div className={classes.contact_header}>
              <p>Email</p>
              <p className={classes.arrow}>{"->"}</p>
            </div>
            <div className={classes.contact_info}>
            <Link href="mailto:thuthiniisilva@gmail.com">
                <p>thuthiniisilva@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className={classes.contact}>
            <div className={classes.contact_header}>
              <p>Phone</p>
              <p className={classes.arrow}>{"->"}</p>
            </div>
            <div className={classes.contact_info}>
            <Link href="tel:+94772445114">
            <p>+94 772 445 114</p>
            </Link>
             
            </div>
          </div>
          <div className={classes.contact}>
            <div className={classes.contact_header}>
              <p>Social Profiles</p>
              <p className={classes.arrow}>{"->"}</p>
            </div>
            <div className={classes.contact_info}>
              <Link href="https://github.com/PPM47">
                <p>Github</p>
              </Link>

              <Link href="https://www.linkedin.com/in/pavan-malshan-50493920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <p>Linkedin</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
