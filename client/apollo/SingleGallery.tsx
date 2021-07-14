import gql from 'graphql-tag';

const MEDIA_QUERY = () => {
    return gql`
    query SINGLE_ARTICLE_QUERY($slug: String!) {
        mediaArticles(where: {slug: $slug}) {
          title,
          slug,
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