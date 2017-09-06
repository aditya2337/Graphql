import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import fetchSong from '../queries/fetchSong';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;
    if (loading) {
      return <h3>Loading...</h3>;
    } else if (!song) {
      return <h3>Song not found</h3>;
    }
    return (
      <div>
        <Link to="/">back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({
    variables: { id: props.params.id }
  })
})(SongDetail);
