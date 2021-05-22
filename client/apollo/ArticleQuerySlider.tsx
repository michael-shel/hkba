import gql from 'graphql-tag';

const ARTICLE_QUERY_SLIDER = (category: string) => {
  return gql`
    query ARTICLE_QUERY_SLIDER {
        ${category}Articles(limit: 5) {
          title,
          slug,
          published_at,
           ArticleBase {
             content,
             link,
             images {
               url
             }
           }
        }
      }
    `
}

export default ARTICLE_QUERY_SLIDER;