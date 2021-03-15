import React from "react";

import styles from "./branch.module.css";

export default ({ data }) => (
  <div className={styles.branch}>
    <div className={styles.frame}></div>
    <div className={styles.info}>
      <h3 className={styles.title}>{data.name}</h3>
    </div>
  </div>
);
