import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo-w150.jpeg";

import styles from "./navigation.module.css";

export default () => (
  <>
    <div className={styles.navigation}>
      <div className={styles.navigationLogo}>
        <Link to="/">
          <img
            alt="Biblioteka Żukowo"
            src={Logo}
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
