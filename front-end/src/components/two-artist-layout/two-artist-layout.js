import React from 'react';
import Artist from '../artist/artist'
import './two-artist-layout.css';


const TwoArtistLayout = (props)=>{
   return (
    <div className="two-artist-layout">
        <div className="two-artist-element"><Artist {...props.artist1}/></div>
        {props.artist2?<div className="two-artist-element"><Artist {...props.artist2}/></div>:null}
    </div>
)};

export default TwoArtistLayout;