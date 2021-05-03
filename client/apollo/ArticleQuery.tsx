import gql from 'graphql-tag';

const ARTICLE_QUERY = (category: string) => {
  return gql`
    query ARTICLE_QUERY {
        ${category}Articles {
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

export default ARTICLE_QUERY;