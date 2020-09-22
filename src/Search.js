import React from 'react'
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <div className="searching">
                <p>動物入れろ<span>→ </span></p>
                <input　type= "text"/>
                <button>検索</button>
            </div>
        );
    }
};


export default Search;
