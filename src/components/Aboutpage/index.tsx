import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const aboutImg = "/img/svg/feeling_proud.svg";
// const aboutImg = "/img/svg/environmental_study.svg";

export default function AboutUsSection() {
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as={"h1"}>About Us</Heading>
            <p className={styles.aboutUsDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis enim doloremque rem dolorum recusandae asperiores sequi veritatis, fugiat neque cum molestias minus harum dolores est quas alias? Sequi, fugiat eum?
            </p>
            <p className={styles.aboutUsDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse numquam praesentium sequi reprehenderit magnam tempore, dolores quidem ipsum ea consectetur amet sunt labore a quas neque rem laborum consequuntur!
            </p>
            <p className={styles.aboutUsDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse numquam praesentium sequi reprehenderit magnam tempore, dolores quidem ipsum ea consectetur amet sunt labore a quas neque rem laborum consequuntur!
            </p>
          </div>
          <div className={clsx("col", "col--6", styles.aboutUsImage)}>
            {/* Placeholder for an about us image */}
            <img src={aboutImg} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
