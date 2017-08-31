import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs
      ? this.props.data.songs.map((song, index) => (
          <li className="collection-item" key={index}>
            {song.title}
          </li>
        ))
      : '';
  }

  render() {
    return (
      <ul className="collection">
        {this.props.data.loading ? 'Loading' : this.renderSongs()}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
