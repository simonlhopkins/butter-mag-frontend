import StrapiClient, { StrapiArticleType } from "@/scripts/StrapiClient";
import styles from "./homepage.module.css";
import clsx from "clsx";
import Link from "next/link";
import CatagoryNameAndDate from "./CatagoryNameAndDate";
import { HTMLProps } from "react";
interface Props extends HTMLProps<HTMLDivElement> {
  article: StrapiArticleType;
}

function SideBySideArticle({ article, ...rest }: Props) {
  const link = StrapiClient.GetURLFromArticle(article);

  return (
    <div className={clsx(styles.card, styles.sideBySideCard)} {...rest}>
      <div>
        <Link href={link}>
          <img src={article.header_image.url}></img>
        </Link>
      </div>
      <div>
        <CatagoryNameAndDate article={article} />
        <Link href={link}>
          <h1>{article.title}</h1>
        </Link>
        <p>{article.tagline}</p>
      </div>
    </div>
  );
}

export default SideBySideArticle;
