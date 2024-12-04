import Image from "next/image";
import HeroSection from "@components/HeroSection";
import CharcoalSection from "@components/CharcoalSection"
import ImageGallery from "@components/ImageGallery";
import AboutSection from "@components/AboutSection";
import Skills from "@components/Skills";
import ContactSection from "@components/ContactSection";
import Pricing from "@components/Pricing";
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
        {/* {/* <div className={classes.pricingSection}>
          <AboutSection />
        </div> */}
        <div className={classes.pricingSection}>
          <Pricing />
        </div> 
  
        <div className={classes.contactSection}>
          <ContactSection />
        </div>
      </section>
    </>
  );
}
