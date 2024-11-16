class StrapiClient {
  private static async graphQLQuery(query: string, variables?: any) {
    console.log(process.env.STRAPI_URL);
    return await fetch(`${process.env.STRAPI_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  }
  static async GetHomePageData() {
    const query = `
    query  {
      homepage {
        Issue
        season
      }
    }
    `;
    return await StrapiClient.graphQLQuery(query)
      .then((res) => res.json())
      .then((json) => {
        return json.data.homepage as {
          Issue: string;
          season: string;
        };
      })
      .catch((error) => {
        return null;
      });
  }
  static async GetArticles() {
    const query = `
    query {
      articles(sort: "createdAt:desc") {
        article_catagory {
          name
        }
        athlete_name
        author {
          bio
          name
          pronouns
          profile_picture {
            url
          }
        }
        content
        createdAt
        header_image {
          url
        }
        title
        tagline
        pronouns
      }
    }
    `;
    return await StrapiClient.graphQLQuery(query)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data.articles as StrapiArticleType[];
        return data.map((item) => StrapiClient.addFullUrlsToArticle(item));
      })
      .catch((error) => {
        return null;
      });
  }

  static async GetAboutPage() {
    const query = `
    query AboutPage {
      aboutPage {
        AboutRows {
          content
          image {
            url
          }
          title
        }
      }
    }`;
    return await StrapiClient.graphQLQuery(query)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json.data.aboutPage as StrapiAboutPageType;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  static async GetArticleCatagories() {
    console.log("fetching article catagories...");
    return await fetch(`${process.env.STRAPI_URL}/api/article-catagories`)
      .then((res) => res.json())
      .then((json) => {
        return json.data.map((item: any) => item.name) as string[];
      })
      .catch((error) => {
        return null;
      });
  }

  static GetURLFromArticle(article: StrapiArticleType) {
    return (
      article.article_catagory.name +
      "/" +
      StrapiClient.getSlugFromArticle(article)
    );
  }
  static getSlugFromArticle(article: StrapiArticleType) {
    return article.athlete_name.toLowerCase().split(" ").join("-");
  }

  static async GetArticleByCategoryAndSlug(category: string, slug: string) {
    const posts = await this.GetArticles();
    if (posts == null) {
      return null;
    }

    return posts.find((item) => {
      return (
        item.article_catagory.name == category &&
        slug == StrapiClient.getSlugFromArticle(item)
      );
    });
  }

  static async GetButterBites() {
    const query = `
    query ButterBites($sort: [String]) {
      butterBites(sort: $sort) {
        episode
        url
      }
    }
  `;
    const variables = {
      sort: ["episode:DESC"], // or "episode:DESC" for descending order
    };
    return await StrapiClient.graphQLQuery(query, variables)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json.data as StrapiButterBitesResponse;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  private static addFullUrlsToArticle(
    article: StrapiArticleType
  ): StrapiArticleType {
    return {
      ...article,
      header_image: {
        url: article.header_image.url.startsWith("/uploads")
          ? process.env.STRAPI_URL + article.header_image.url
          : article.header_image.url,
      },
    };
  }
}

export interface StrapiButterBitesResponse {
  butterBites: {
    episode: number;
    url: string;
  }[];
}

interface StrapiImage {
  url: string;
}
export interface StrapiAboutPageType {
  AboutRows: {
    content: string;
    image: StrapiImage;
    title: string;
  }[];
}

export interface StrapiArticleAuthorType {
  name: string;
  bio: string;
  pronouns: string;
  profile_picture: StrapiImage;
}
export interface StrapiArticleType {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  content: string;
  athlete_name: string;
  tagline: string;
  header_image: StrapiImage;
  pronouns: string;
  article_catagory: {
    name: string;
  };
  author: StrapiArticleAuthorType | null;
}

export default StrapiClient;
