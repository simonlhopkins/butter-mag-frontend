"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./header.module.css";

const SearchButton = () => {
  const onSearchClick = () => {
    console.log("TODO: Search animation and functionality");
  };
  return (
    <button
      className={styles.searchButton}
      onClick={() => {
        onSearchClick();
      }}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
    </button>
  );
};

export default SearchButton;
