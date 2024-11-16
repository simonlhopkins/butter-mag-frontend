import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/_components/Header/Header";
import StrapiClient from "@/scripts/StrapiClient";
import ArticleCard from "./_components/ArticleCard";
import TopSectionArticles from "./_components/TopSectionArticles";
import BottomSectionArticles from "./_components/BottomSectionArticles";

export default async function Home() {
  const articleCatagories = await StrapiClient.GetArticleCatagories();
  const posts = await StrapiClient.GetArticles();

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
