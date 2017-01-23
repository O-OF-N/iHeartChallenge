import React from 'react';
import ArtistResult from '../artist/artist-result';
import './search-results-layout.css';

const SearchResultsLayout = props => (
    <div>
        {props.artists.map((artist, index) =><ArtistResult key={index} {...artist} />)}
    </div>
);

export default SearchResultsLayout;

