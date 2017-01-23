import React, { Component } from 'react';
import TwoArtistLayout from '../layouts/two-artist-layout';
import ThreeArtistLayout from '../layouts/three-artist-layout';
import SearchResultsLayout from '../layouts/search-results-layout';
import './home.css';
import Artists from '../../config/config'

const buildTwoArtistComponent = (artists) => artists.map((artist, index) =>
  index % 2 === 0 ? <TwoArtistLayout key={index} artist1={artist} artist2={artists[index + 1]} /> : null
);

//const buildSearchResultsComponent = (artists) =>  ;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      artists: Artists,
      width: typeof window === 'object' ? window.innerWidth : null
    }
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: typeof window === 'object' ? window.innerWidth : null
      });
    });
  };

  render() {
    const {artists, width} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>iHeart Artist catalog</h2>
        </div>
        <div className="Artist-catalog">
          {width > 769 ? <ThreeArtistLayout artists={artists} /> :
            <TwoArtistLayout artists={artists} />}
        </div>
        <div className="Artist-catalog">
          <SearchResultsLayout artists={artists} />
        </div>
      </div>
    );
  };

};

export default Home;
