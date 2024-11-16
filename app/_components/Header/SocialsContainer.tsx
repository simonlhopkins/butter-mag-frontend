import clsx from "clsx";
import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SearchButton from "./SearchButton";
import Link from "next/link";

const SocialsContainer = () => {
  return (
    <div className={clsx(styles.socialsContainer)}>
      <Link href="https://www.instagram.com/officialbuttermag/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </Link>
      <Link href="">
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </Link>
      <Link href="https://www.tiktok.com/@officialbuttermag" target="_blank">
        <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
      </Link>
      <p>
        <SearchButton />
      </p>
    </div>
  );
};

export default SocialsContainer;
