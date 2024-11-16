import styles from "./page.module.css";
import TopSectionArticles from "./_components/TopSectionArticles";
import BottomSectionArticles from "./_components/BottomSectionArticles";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Butter Mag Home page!!!!</h1>
        <TopSectionArticles />
        <BottomSectionArticles />
        {/* <p>{JSON.stringify(posts, null, 2)}</p> */}
      </main>
    </div>
  );
}
