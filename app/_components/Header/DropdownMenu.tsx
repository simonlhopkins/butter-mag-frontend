"use client";
import { useState } from "react";
import styles from "./header.module.css";
import clsx from "clsx";

interface Link {
  text: string;
  link: string;
}
interface DropdownEntryProps {
  text: string;
  links: Link[];
  link?: string;
}
const DropdownMenu = ({ text, links, link }: DropdownEntryProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      key={text}
      style={{
        position: "relative",
      }}
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      {link ? (
        <a href={link}>
          <p className={styles.dropdownEntry}>{text.toUpperCase()}</p>
        </a>
      ) : (
        <p className={styles.dropdownEntry}>{text.toUpperCase()}</p>
      )}

      <ul
        className={clsx(
          showMenu ? styles.dropdownShowing : styles.dropdownHidden,
          styles.dropdownMenu
        )}
      >
        {links.map((item) => (
          <a href={item.link} key={item.text}>
            <li>
              <p>{item.text}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
