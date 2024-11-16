import React, { useState } from "react";
import styles from "./header.module.css";

import DropdownMenu from "./DropdownMenu";
import StrapiClient from "@/scripts/StrapiClient";

//todo, load this from the server,, or maybe not idgaf
const labels = ["listen", "about", "contact", "support"];

const HeaderDropdown = async () => {
  const articleCategories = await StrapiClient.GetArticleCatagories();
  return (
    <div className={styles.dropdown}>
      {articleCategories && (
        <DropdownMenu
          text="sports"
          links={articleCategories.map((item) => ({
            text: item,
            link: "/" + item,
          }))}
        />
      )}
      <DropdownMenu text={"LISTEN"} links={[]} link="/LISTEN" />
      <DropdownMenu text={"ABOUT"} links={[]} link="/ABOUT" />
      <DropdownMenu text={"CONTACT"} links={[]} link="/CONTACT" />
      <DropdownMenu
        text={"SUPPORT"}
        links={[]}
        link="https://www.patreon.com/buttermag"
      />
    </div>
  );
};

export default HeaderDropdown;
