import { StrapiArticleType } from "@/scripts/StrapiClient";
import React from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  article: StrapiArticleType;
}
const CatagoryNameAndDate = ({ article, ...props }: Props) => {
  return (
    <p {...props}>
      <span>{article.article_catagory.name}</span>
      <span>{"//"}</span>
      <time dateTime={article.createdAt}>{formatDate(article.createdAt)}</time>
    </p>
  );
};

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  const day = date.getUTCDate().toString().padStart(2, "0");
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}

export default CatagoryNameAndDate;
