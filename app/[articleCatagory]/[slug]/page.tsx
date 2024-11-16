import StrapiClient from "@/scripts/StrapiClient";
import { notFound } from "next/navigation";
import styles from "./article.module.css";
import CKContent from "@/SharedComponents/CKContent";
import AuthorCard from "./AuthorCard";
import CatagoryNameAndDate from "@/app/_components/CatagoryNameAndDate";

interface ArticlePageProps {
  params: {
    articleCatagory: string;
    slug: string;
  };
}
export async function generateStaticParams() {
  const articles = await StrapiClient.GetArticles(); // Fetch all articles
  if (!articles) return [];
  // Generate paths with dynamic category and name for each article
  return articles.map((article) => ({
    articleCatagory: article.article_catagory.name,
    slug: StrapiClient.getSlugFromArticle(article),
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleCatagory, slug } = params;

  // Fetch the article based on category and name
  const article = await StrapiClient.GetArticleByCategoryAndSlug(
    articleCatagory,
    slug
  );

  if (!article) {
    // Redirect to a 404 page if the article is not found
    notFound();
  }

  return (
    <div className={styles.article}>
      <div className={styles.headerImgContainer}>
        <img data-aos="zoom-in" src={article.header_image.url}></img>
      </div>
      <CatagoryNameAndDate article={article} className={styles.dateCatagory} />
      <h1>{article.title}</h1>
      <p className={styles.pronouns}>{article.pronouns}</p>
      <div className={styles.content}>
        <CKContent htmlString={article.content} />
      </div>
      {article.author && <AuthorCard author={article.author} />}
      {/* <p>{JSON.stringify(article)}</p> */}
    </div>
  );
}
