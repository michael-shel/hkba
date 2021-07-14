import gql from 'graphql-tag';

const CH_QUERY = () => {
    return gql`
    query CH_QUERY($date: String!) {
      chCalendars(where: {date: $date}) {
          title,
          slug,
          date,
          reading,
          comment,
          schedule
        }
      }
    `
}

export default CH_QUERY;