import React from 'react';
import './artist.css'; 

const Artist =props=>(
    <div>
        <img src={props.imageUrl} className="artist-image" role="presentation"/>
        <h1>{props.name}</h1>
        {props.description}
    </div>
);

export default Artist;