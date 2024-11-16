import StrapiClient from "@/scripts/StrapiClient";
import SideBySideArticle from "../_components/SideBySideArticle";

export async function generateStaticParams() {
  const articleCatagories = await StrapiClient.GetArticleCatagories(); // Fetch all articles
  if (!articleCatagories) return [];
  // Generate paths with dynamic category and name for each article
  return articleCatagories.map((item) => ({
    articleCatagory: item,
  }));
}

interface CategoryPageProps {
  params: {
    articleCatagory: string;
  };
}
export default async function Page({ params }: CategoryPageProps) {
  const allArticles = await StrapiClient.GetArticles();
  if (allArticles == null) {
    return <p>error getting posts</p>;
  }
  const articlesInCategory = allArticles.filter(
    (item) => item.article_catagory.name == params.articleCatagory
  );

  return (
    <div>
      <h1>Category: {params.articleCatagory}</h1>
      {articlesInCategory.map((item) => (
        <SideBySideArticle key={item.id} data-aos="fade-right" article={item} />
      ))}
    </div>
  );
}
