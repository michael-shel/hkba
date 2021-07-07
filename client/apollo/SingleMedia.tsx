import gql from 'graphql-tag';

const MEDIA_QUERY = () => {
    return gql`
    query SINGLE_MEDIA_QUERY($slug: String!) {
        mediaAssets(where: {slug: $slug}) {
          title,
          slug,
            image {
                url,
                alternativeText,
                caption
            }
        }
      }
    `
}

export default MEDIA_QUERY;