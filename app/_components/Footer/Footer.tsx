import Link from "next/link";
import styles from "./footer.module.css";
import SocialsContainer from "../Header/SocialsContainer";
import footerImage from "@/public/butter-footer.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={footerImage.src}></img>
      <div className={styles.footerLinks}>
        <Link href={"/CLIMB"}>CLIMB</Link>
        <Link href={"/SKATE"}>SKATE</Link>
        <Link href={"/SNOW"}>SNOW</Link>
        <Link href={"/SURF"}>SURF</Link>
        <Link href={"/ABOUT"}>ABOUT</Link>
        <Link href={"/CONTACT"}>CONTACT</Link>
      </div>
      <h1>STAY IN THE KNOW</h1>
      <SocialsContainer />
    </footer>
  );
}

export default Footer;
