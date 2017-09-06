import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content, likes }) => (
          <li className="collection-item" key={id}>
            {content}
            <div className="vote-box">
              <i
                onClick={() => this.onLike(id, likes)}
                className="material-icons">
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
