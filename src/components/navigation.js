import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./navigation.module.css";

export default ({ data }) => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navigationLogo}>
          <Link to="/">
            <Img
              alt={data.title}
              fluid={data.fluid}
              className={styles.navigationLogoImg}
            />
          </Link>
        </div>
        <nav role="navigation" className={styles.navigationLinks}>
          <div className={styles.navigation}>
            <Link to="/" className={styles.navigationItem}>
              Home
            </Link>
            <Link to="/projekty/" className={styles.navigationItem}>
              Projekty
            </Link>
            <Link to="/aktualnosci/" className={styles.navigationItem}>
              Aktualności
            </Link>
            <Link to="/o-nas/" className={styles.navigationItem}>
              O nas
            </Link>
            <Link to="/kontakt/" className={styles.navigationItem}>
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
