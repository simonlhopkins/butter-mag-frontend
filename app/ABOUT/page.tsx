import StrapiClient from "@/scripts/StrapiClient";
import styles from "./about.module.css";
import clsx from "clsx";

export default async function Page() {
  const aboutPage = await StrapiClient.GetAboutPage();
  if (aboutPage == null) return <p>problem getting about page</p>;
  return (
    <div>
      <h1>ABOUT</h1>
      {aboutPage.AboutRows.map((item, i) => (
        <div
          key={item.title}
          className={clsx(
            styles.aboutRowContainer,
            i % 2 == 0 && styles.switch
          )}
        >
          <div className={clsx(styles.aboutRowLeft)}>
            <img src={process.env.STRAPI_URL + item.image.url}></img>
          </div>
          <div className={clsx(styles.aboutRowRight)}>
            <h1 className={styles.aboutRowHeader}>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
