import React, { Component } from 'react';
import './search-bar.css';
import axios from 'axios';
import co from 'co';


export default class SearchBar extends Component {

    * makeHttpCall(name) {
        const result = name?yield axios.get(`http://localhost:7000/iheartcatalog/search/${name}`, { Accept: 'application/json' }):{data:[]};
        return result.data;
    };

    search() {
        if(this.refs.searchString.value)
        co(this.makeHttpCall.bind(null, this.refs.searchString.value))
        .then((result) => {
            this.props.onSearch(result);
        });
    };

    clear(){
        this.refs.searchString.value="";
        this.props.onClear();
    }

    keyPress(e){
        if (e.key === 'Enter') 
            this.search();
    }

    render() {
        return <div className="search-div">
            <input type="text" ref="searchString" placeholder="e.g.: Search for Selena Gomez"
            autoFocus
    style={{width: '60%',height:'50%', marginRight: '2%', marginTop:'1%'}} onKeyPress={this.keyPress.bind(this)}/>
            <button onClick={this.search.bind(this)}
            style={{width: '15%',height:'50%',color:'maroon'}}> <b>Search</b> </button>
            <button onClick={this.clear.bind(this)}
          style={{width: '15%',height:'50%',color:'maroon',marginLeft: '2%'}}><b>Reset</b></button>
        </div>
    };
};