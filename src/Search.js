import React from 'react';
import './Search.css';
require('dotenv').config();
const axios = require('axios');


class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isLoaded: false,
            items: [],
            content: "",
            // hasContentError: false
        };
    }

    requestPixabay = async () => {
        const res = await axios.get("https://pixabay.com/api/", {
            params: {
                key: process.env.REACT_APP_KEY,
                q: this.state.content
            }
        });
        const items = res.data;
        const list = []
        items.hits.forEach(element => {
            if (element.largeImageURL !== undefined) {
                list.push(element.largeImageURL)
            }
        });
        this.setState({ isLoaded: true, items: list });
    }


    render() {
        return (
            <div className="searching" >
                <div className="searching-wrapper">
                    <p> ↓Put in any words↓</p>

                    <input
                        onChange={(event) => { this.setState({ content: event.target.value }) }} />
                    {/* (event.target.value)が入力された値を示してる */}

                    <button class="Button-style"
                        type="button" onClick={() => this.requestPixabay()}> Search </button>
                </div>
                <div className="image-wrapper">
                    {this.state.items.map((x) => {
                        return (
                            <li>
                                <img src={x} />
                            </li>
                        )
                    }
                    )}
                </div>
            </div>
        );
    };
};

export default Search;
