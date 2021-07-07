import gql from 'graphql-tag';

const ARTICLE_QUERY = (category: string | string[]) => {
    return gql`
    query SINGLE_ARTICLE_QUERY($slug: String!) {
        blogArticles(where: {slug: $slug}) {
          title,
          slug,
          published_at,
          category,
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