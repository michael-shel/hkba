import gql from 'graphql-tag';

const MEDIA_QUERY = () => {
  return gql`
    query ARTICLE_QUERY {
      mediaArticles {
          title,
          slug,
          published_at,
           ArticleBase {
             content,
             link,
             images {
               url,
               alternativeText,
               caption
             }
           }
      }
    }
  `
}

export default MEDIA_QUERY;