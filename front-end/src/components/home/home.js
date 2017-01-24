import React, { Component } from 'react';
import TwoArtistLayout from '../layouts/two-artist-layout';
import ThreeArtistLayout from '../layouts/three-artist-layout';
import SearchBar from '../search-bar/search-bar';
import './home.css';
import Artists from '../../config/config'


class Home extends Component {

  constructor() {
    super();
    this.state = {
      artists: Artists,
      width: typeof window === 'object' ? window.innerWidth : null,
      search: false
    };
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: typeof window === 'object' ? window.innerWidth : null
      });
    });
  };

  updateArtists(artists) {
    console.log(artists);
    this.setState({ artists, search: true })
  };

  showHome() {
    this.setState({ artists: Artists, search: false })
  };

  render() {
    const {artists, width, search} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>iHeart Artist catalog</h2>
        </div>
        <div className="Artist-catalog">
          <button onClick={this.showHome.bind(this)}>Home </button>
          <SearchBar onSearch={this.updateArtists.bind(this)} />
        </div>
        <div className="Artist-catalog">
          {width > 769 ? <ThreeArtistLayout artists={artists} /> :
            <TwoArtistLayout artists={artists} />}
        </div> 
      </div>
    );
  };

};

export default Home;
