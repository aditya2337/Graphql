import React, { Component } from 'react';
import query from '../queries/fetchSongs';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs
      ? this.props.data.songs.map((song, index) => (
          <li className="collection-item" key={index}>
            <Link to={`/song/${song.id}`}>{song.title}</Link>
            <i
              onClick={() => this.onSongDelete(song.id)}
              className="material-icons"
            >
              delete
            </i>
          </li>
        ))
      : '';
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.data.loading ? 'Loading' : this.renderSongs()}
        </ul>
        <Link className="btn-floating btn-large red right" to="/song/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
