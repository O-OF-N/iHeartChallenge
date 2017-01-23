import React from 'react';
import Artist from '../artist/artist'
import './three-artist-layout.css';


const ThreeArtistLayout = (props)=>{
   return (
    <div className="three-artist-layout">
        <div className="three-artist-element"><Artist {...props.artist1}/></div>
        {props.artist2?<div className="three-artist-element"><Artist {...props.artist2}/></div>:null}
        {props.artist3?<div className="three-artist-element"><Artist {...props.artist3}/></div>:null}
    </div>
)};

export default ThreeArtistLayout;