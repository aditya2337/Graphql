import gql from 'graphql-tag';

export default gql`
  {
    songs {
      title
      id
    }
  }
`;
