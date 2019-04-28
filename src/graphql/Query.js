import gql from 'graphql-tag';

// Query
export const GET_PACKAGE = gql`
  query GetPackage($date: String!) {
    getPackage(date: $date) {
      id
      date
      advice
      picture
      comments
    }
  }
`;
