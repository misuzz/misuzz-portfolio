import React from 'react';
import './Search.css';
import Twitter from 'twitter-lite';

const client = new Twitter({
    subdomain: "cors-anywhere.herokuapp.com/https://api",
    consumer_key: 'DZ16Dl9ONDgcztHlNMuUVIR6x',
    consumer_secret: '9ifjSHk6LMvYfjf8GIbjAdLVR1aeHdQNlQi4GNjNGKtVjtNb4U',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAD%2BYHwEAAAAA%2BrLihuKzOcwzS%2BZVISAD%2F9dHJVM%3DM93E37OHrTGyP9XDlUASvEsFHPY1g238MP5SKFxdwG80Il6FY9'
});

class Search extends React.Component {

    async requestTwitter() {
        const result = await client.get('search/tweets', {
            q: 'ニジマス',   //←？//
            result_type: 'mixed',  //←？//
            include_entities: 'true'   //←？//
        });
        var statuses = result.statuses     //←？//
        statuses.forEach(element => {
            if (element.entities.media !== null) {
                var entitie = element.entities
                if (entitie !== null) {
                    if (entitie.media !== undefined) {
                        entitie.media.forEach(element => {
                            console.log(element.media_url)
                        })
                    }
                } else {
                    console.log("エラー")
                }
            } else {
                console.log("エラー")
            }
        });
        // statuses.forEach((status) => {
        //     console.log(status.entities.media)
        // })
    }

    render() {
        return (
            <div className="searching">
                <p>Animal's Name Here<span class="one">⇒</span></p>
                <input/>
                <button class="Button-style"
                    type="button" onClick={() => this.requestTwitter()}> Search </button>
            </div>
        );
    }
};


export default Search;
