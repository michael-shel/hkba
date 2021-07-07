import gql from "graphql-tag";

const RECOMENDATION_QUERY_SLIDER = () => {
  return gql`
    query ARTICLE_QUERY_SLIDER {
      sideSliders {
        blog_articles {
          title
          slug
          category
          published_at
          ArticleBase {
            content
            images {
              url
            }
          }
        }
      }
    }
  `;
};

export default RECOMENDATION_QUERY_SLIDER;
