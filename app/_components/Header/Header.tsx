import React from "react";
import SocialsContainer from "./SocialsContainer";
import styles from "./header.module.css";
import HeaderDropdown from "./HeaderDropdown";
import StrapiClient from "@/scripts/StrapiClient";

const Header = async () => {
  const homepageData = await StrapiClient.GetHomePageData();
  return (
    <header className={styles.header}>
      <div></div>
      <div className={styles.middle}>
        <a href="/">
          <img
            src="/bottomless_butter.svg"
            alt=""
            className={styles.logoImage}
          />
        </a>
        {homepageData && (
          <p>
            ISSUE {homepageData.Issue} | {homepageData.season}
          </p>
        )}
        <HeaderDropdown />
      </div>
      <div>
        <SocialsContainer />
      </div>
    </header>
  );
};

export default Header;
