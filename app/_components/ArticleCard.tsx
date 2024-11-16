import StrapiClient, { StrapiArticleType } from "@/scripts/StrapiClient";
import React, { HTMLProps } from "react";
import styles from "./homepage.module.css";
import * as cheerio from "cheerio";
import Link from "next/link";
import CatagoryNameAndDate from "./CatagoryNameAndDate";

interface Props extends HTMLProps<HTMLDivElement> {
  article: StrapiArticleType;
  descriptionType: "tagline" | "teaser";
}
const ArticleCard = ({ article, descriptionType, ...rest }: Props) => {
  const $ = cheerio.load(article.content);
  const textContent = $.text();
  const link = StrapiClient.GetURLFromArticle(article);

  let content;
  if (descriptionType == "tagline") {
    content = article.tagline;
  } else if (descriptionType == "teaser") {
    content = textContent.split(" ").slice(0, 55).join(" ") + " [...]";
  }

  return (
    <div className={styles.card} {...rest}>
      <Link href={link}>
        <img src={article.header_image.url}></img>
      </Link>
      <CatagoryNameAndDate article={article} />
      <Link href={link}>
        <h1>{article.title}</h1>
      </Link>
      <p>{content}</p>
    </div>
  );
};

export default ArticleCard;
