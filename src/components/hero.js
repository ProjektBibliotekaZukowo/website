import React from "react";
import Img from "gatsby-image";

import styles from "./hero.module.css";
import Wave from "../images/wave.svg";

export default ({ data }) => (
  <div className={styles.hero}>
    <Img className={styles.heroImage} alt={data.title} fluid={data.fluid} />
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>{data.title}</h1>
    </div>
    <img src={Wave} className={styles.wave} />
  </div>
);
