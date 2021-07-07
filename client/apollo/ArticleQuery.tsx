import gql from 'graphql-tag';

const ARTICLE_QUERY = (cat: string) => {
  return gql`
    query ARTICLE_QUERY {
      blogArticles(where: {category: "${cat}"}) {
          title,
          slug,
    			category
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

export default ARTICLE_QUERY;