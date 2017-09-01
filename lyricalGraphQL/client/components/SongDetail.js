import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;
    return (
      <div>
        <Link to="/">back</Link>
        <h3>
          {loading ? 'Loading...' : !song ? 'Song not found' : song.title}
        </h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({
    variables: { id: props.params.id }
  })
})(SongDetail);
