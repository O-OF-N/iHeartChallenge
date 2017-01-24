import React from 'react';
import './artist.css'; 

const Artist =props=>(
    <div style={{height:'100%'}} className="artist-height-full">
        <img src={props.imageUrl} className="artist-image" role="presentation"/>
        <span title={props.name}><p className="artist-name">{props.name}</p></span>
        <span title={props.description}><p className="artist-desc">{props.description}</p></span>
    </div>
);

export default Artist;