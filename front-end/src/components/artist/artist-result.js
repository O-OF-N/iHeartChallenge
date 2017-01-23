import React from 'react';
import './artist-result.css';

const ArtistResult = props => (
    <div>
        <span><img src={props.imageUrl} className="artist-results-image" role="presentation" /></span>
        <span><p className="artist-results-name" >{props.name}</p></span>
    </div>
);

export default ArtistResult;