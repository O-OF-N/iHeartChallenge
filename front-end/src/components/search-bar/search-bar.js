import React, { Component } from 'react';
import './search-bar.css';
import axios from 'axios';
import co from 'co';


export default class SearchBar extends Component {

    * makeHttpCall(name) {
        const result = yield axios.get(`http://localhost:7000/iheartcatalog/search/${name}`, { Accept: 'application/json' })
        return result.data;
    };

    search() {
        const result = co(this.makeHttpCall.bind(null, this.refs.searchString.value))
        .then((result) => {
            this.props.onSearch(result);
        });
    };

    render() {
        return <div>
            <input type="text" ref="searchString" />
            <button onClick={this.search.bind(this)}> Search </button>
        </div>
    };
};