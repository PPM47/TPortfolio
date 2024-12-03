import Image from "next/image";
import HeroSection from "@components/HeroSection";
import CharcoalSection from "@components/CharcoalSection"
import ImageGallery from "@components/ImageGallery";
import AboutSection from "@components/AboutSection";
import Skills from "@components/Skills";
import ContactSection from "@components/ContactSection";
import EducationSection from "@components/EducationSection";
import ProjectSection from "@components/ProjectSection";
import classes from "@app/Home.module.scss";
import Gutter from "@components/gutter";

export default function Home() {
  return (
    <>
      {/* <Gutter> </Gutter> */}
      <section className={classes.home_section}>
        <div className={classes.nav_spaser}></div>
        <div className={classes.background_def}></div>
        <div className={classes.background_con}>
          <div className={classes.background_1}></div>
          <div className={classes.background_2}></div>
        </div>
        <div className={classes.heroSection}>
          <HeroSection />
        </div>
        <div className={classes.charcoalSection}>
          <CharcoalSection />
        </div>
        <div className={classes.imageGallery}>
          <ImageGallery />
        </div>
        <div className={classes.aboutSection}>
          <AboutSection />
        </div>
        <div className={classes.skillsSection}>
          <Skills />
        </div>
        <div className={classes.educationSection}>
          <EducationSection />
        </div>
        <div className={classes.projectSection}>
          <ProjectSection />
        </div>
        <div className={classes.contactSection}>
          <ContactSection />
        </div>
      </section>
    </>
  );
}
