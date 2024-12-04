import React from "react";
import classes from "@components/Pricing.module.scss";

const Pricing = () => {
  return (
    <>
      <section className={classes.pricing_sec}>
        <div className={classes.pricing_header}>
          <h1>- Pricing Plans -</h1>
          <p>{"(A4 & A3 Sizes)"}</p>
        </div>
        <div className={classes.pricing_cards}>
          <div className={classes.pricing_card}>
            <div className={classes.pricing_card_titale}>
              <p>- A4 Size -</p>
            </div>
            <div className={classes.pricing_card_wf}>
              <div className={classes.pricing_card_sub_titale}>
                <p>With Framing</p>
              </div>
              <div className={classes.pricing_card_details}>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Single</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 4000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Couple</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 5000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Family/Group</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 6000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.pricing_card_wf}>
              <div className={classes.pricing_card_sub_titale}>
                <p>Without Framing</p>
              </div>

              <div className={classes.pricing_card_details}>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Single</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 3000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Couple</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 4000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Family/Group</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 5000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.pricing_card}>
            <div className={classes.pricing_card_titale}>
              <p>- A3 Size -</p>
            </div>
            <div className={classes.pricing_card_wf}>
              <div className={classes.pricing_card_sub_titale}>
                <p>With Framing</p>
              </div>

              <div className={classes.pricing_card_details}>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Single</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 5000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Couple</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 6000</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Family/Group</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 7500</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.pricing_card_wf}>
              <div className={classes.pricing_card_sub_titale}>
                <p>Without Framing</p>
              </div>

              <div className={classes.pricing_card_details}>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Single</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 3500</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Couple</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 4500</p>
                  </div>
                </div>
                <div className={classes.pricing_card_texts}>
                  <div className={classes.pricing_card_text}>
                    <p>{"> "}Family/Group</p>
                  </div>
                  <div className={classes.pricing_card_price}>
                    <p>- Rs. 6000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
