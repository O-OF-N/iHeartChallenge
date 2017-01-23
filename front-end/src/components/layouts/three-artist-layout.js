import React from 'react';
import Artist from '../artist/artist';
import './three-artist-layout.css';


const ThreeArtistLayout = props => {
    const {artists} = props;
    let [artist1, artist2, artist3] = [];
    return <div>
        {artists.map((artist, index) => {
            return index % 3 === 0 ?
                ([artist1, artist2, artist3] = artists.slice(index, index + 3),
                    <div className="three-artist-layout" key={index}>
                        <div className="three-artist-element"><Artist key={index} {...artist1} /></div>
                        {artist2 ? <div className="three-artist-element"><Artist key={index} {...artist2} /></div> : null}
                        {artist3 ? <div className="three-artist-element"><Artist key={index} {...artist3} /></div> : null}
                    </div>) : null
        })}
    </div>
};

export default ThreeArtistLayout;