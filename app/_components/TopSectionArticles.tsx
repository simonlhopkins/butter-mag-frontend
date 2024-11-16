import StrapiClient from "@/scripts/StrapiClient";
import styles from "./homepage.module.css";
import ArticleCard from "./ArticleCard";

async function TopSectionArticles() {
  const posts = await StrapiClient.GetArticles();
  if (posts == null) return <p>cannot fetch posts :^( </p>;
  const mainPost = posts[0];
  const smallerPosts = posts.slice(1, 3);
  return (
    <div className={styles.topSection}>
      <div className={styles.colMainSection}>
        <ArticleCard
          data-aos="zoom-in"
          article={mainPost}
          descriptionType="teaser"
        />
      </div>
      <div className={styles.colSmallerPosts}>
        {smallerPosts.map((article) => (
          <ArticleCard
            data-aos="zoom-in"
            article={article}
            descriptionType="tagline"
          />
        ))}
      </div>
    </div>
  );
}

export default TopSectionArticles;
