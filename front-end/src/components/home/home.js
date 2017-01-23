import React, { Component } from 'react';
import TwoArtistLayout from '../two-artist-layout/two-artist-layout'
import ThreeArtistLayout from '../three-artist-layout/three-artist-layout'
import './home.css';
import Artists from '../../config/config'


const buildThreeArtistComponent = (artists) => artists.map((artist, index) =>
  index % 3 === 0 ? <ThreeArtistLayout key={index} artist1={artist} artist2={artists[index + 1]}
    artist3={artists[index + 2]} /> : null
);

const buildTwoArtistComponent = (artists) => artists.map((artist, index) =>
  index % 2 === 0 ? <TwoArtistLayout key={index} artist1={artist} artist2={artists[index + 1]} /> : null
);

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
          {width > 769 ? buildThreeArtistComponent(artists) : buildTwoArtistComponent(artists)}
        </div>
      </div>
    );
  };

};

export default Home;
