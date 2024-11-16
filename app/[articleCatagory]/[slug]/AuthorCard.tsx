import { StrapiArticleAuthorType } from "@/scripts/StrapiClient";
import CKContent from "@/SharedComponents/CKContent";
import styles from "./article.module.css";

interface Props {
  author: StrapiArticleAuthorType;
}

function AuthorCard({ author }: Props) {
  console.log("author is" + author);
  return (
    <div className={styles.authorCardWrapper}>
      <div className={styles.authorCard}>
        <div className={styles.authorImage}>
          <img src={process.env.STRAPI_URL + author.profile_picture.url}></img>
        </div>
        <div className={styles.authorDescription}>
          <CKContent htmlString={author.bio} />
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
