import React from 'react';
import Artist from '../artist/artist'
import './two-artist-layout.css';


const TwoArtistLayout = props => {
    const {artists} = props;
    let [artist1, artist2] = [];
    return <div style={{height:'100%'}}>
        {artists.map((artist, index) => {
            return index % 2 === 0 ?
                ([artist1, artist2] = artists.slice(index, index + 2),
                    <div className="two-artist-layout" key={index}>
                        <div className="two-artist-element"><Artist key={index} {...artist1} /></div>
                        {artist2 ? <div className="two-artist-element"><Artist key={index} {...artist2} /></div> : null}
                    </div>) : null
        })}
    </div>
};

export default TwoArtistLayout;