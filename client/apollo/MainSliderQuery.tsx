import gql from 'graphql-tag';

const MAIN_SLIDER_QUERY = () => {
  return gql`
    query MAIN_SLIDER_QUERY {
      mainSliders {
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
  `
}

export default MAIN_SLIDER_QUERY;