import React from 'react';
import './Search.css';
import Twitter from 'twitter-lite';

require('dotenv').config();
const client = new Twitter({
	subdomain: process.env.REACT_APP_SUBDOMAIN,
	consumer_key: process.env.REACT_APP_CONSUMER_KEY,
	consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
	bearer_token: process.env.REACT_APP_BEARER_TOKEN
});


class Search extends React.Component {
	constructor(props) {
		super()
		this.state = {
			isLoaded: false,
			items: [],
			content: "",
		};
	}

	async requestTwitter(content) {
		let list = [];
		const result = await client.get('search/tweets', {
			q: content,
			result_type: 'recent',
			count: 100,
			include_entities: 'true'
		});
		var statuses = result.statuses;
		statuses.forEach(element => {
			if (element.entities.media !== null) {
				var entitie = element.entities
				if (entitie !== null) {
					if (entitie.media !== undefined) {
						entitie.media.forEach(element => {
							console.log(element.media_url);
							list.push(element.media_url);
						})
					}
				} else {
					console.log("エラー")
				}
			} else {
				console.log("エラー")
			}
		});
		this.setState({ isLoaded: true, items: list });
	};

	render() {
		return (
			<div className="searching" >
				<div className="searching-wrapper">
					<p> ↓Put in any words↓</p>
					<input
						onChange={(event) => { this.setState({ content: event.target.value }) }} />
					{/* (event.target.value)が入力された値を示してる */}

					<button class="Button-style"
						type="button" onClick={() => this.requestTwitter(this.state.content)}> Search </button>
				</div>
				<div className="image-wrapper">
					{this.state.items.map((index, x) => {
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
