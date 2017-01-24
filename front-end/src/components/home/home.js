import React, { Component } from 'react';
import TwoArtistLayout from '../layouts/two-artist-layout';
import ThreeArtistLayout from '../layouts/three-artist-layout';
import SearchBar from '../search-bar/search-bar';
import './home.css';
import Artists from '../../config/config';
import * as StateFunctions from './home-state';


const NoResults = ()=><p>No Artists Found</p>

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
      this.setState(StateFunctions.updateStateDimensions(this.state,window));
    });
  };

  setSearchResults(artists) {
    this.setState(StateFunctions.updateState(this.state,artists,true));
  };

  resetSearchResults() {
    this.setState(StateFunctions.updateState(this.state,Artists,false));
  };

  render() {
    const {artists, width} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>iHeart Artist catalog</h2>
        </div>
        <div className="menu-bar">
          <SearchBar onSearch={this.setSearchResults.bind(this)} 
          onClear={this.resetSearchResults.bind(this)}/>
                    <div className="home-button">
          </div>
          
        </div>
        <div className="Artist-catalog">
          {artists.length? width > 769 ? <ThreeArtistLayout artists={artists} /> :
            <TwoArtistLayout artists={artists} />:
          <NoResults/>}
        </div> 
      </div>
    );
  };

};

export default Home;
