import React from 'react';

import styles from './branch.module.css';

export default ({ data, isOdd }) => (
  <div className={isOdd ? styles.branchWrapperOdd : styles.branchWrapper}>
    <div className={isOdd ? styles.branchOdd : styles.branch}>
      <div className={isOdd ? styles.frameOdd : styles.frame}>
        <div className={styles.map}></div>
        <div className={styles.info}>
          <h3 className={styles.title}>{data.name}</h3>
          <h2>Adres</h2>
          <p>{data?.address?.miejscowosc}</p>
        </div>
      </div>
    </div>
  </div>
);
