import StrapiClient from "@/scripts/StrapiClient";
import SideBySideArticle from "./SideBySideArticle";
import styles from "./homepage.module.css";

async function BottomSectionArticles() {
  const posts = await StrapiClient.GetArticles();
  if (posts == null) return <p>posts not found</p>;
  return (
    <div className={styles.bottomSection}>
      {posts.map((article) => (
        <SideBySideArticle
          key={article.id}
          data-aos="fade-right"
          article={article}
        />
      ))}
    </div>
  );
}

export default BottomSectionArticles;
