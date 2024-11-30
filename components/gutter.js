import React from "react";
import guttercss from "@components/gutter.module.scss";

const gutter = ({ children }) => {
  return (
    <section className={`${guttercss.main_con}`}>
      <div className={`${guttercss.main_div}`}>{children}</div>
    </section>
  );
};

export default gutter;
