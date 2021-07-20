import React from 'react';
import './Myprofile.css';
import { withRouter } from 'react-router';


class Myprofile extends React.Component {
	handleToAboutPage = () => {
		this.props.history.push('/')
	}
	render() {
		const MyprofileList = [
			{ y: "Creator", z: "misuzz" },
			// { y: "Age", z: "twenties" },
			// { y: "Start date of learning engineering", z: "since late August in 2020" },
			// {
			//     y: "The process of how I created this",
			//     z: "First, I wanted to create that you could search and know the zoo in Japan which there are animals you put in the search box in. However,there were no such APIs which covered where any animals were. Therefore, I changed what you could search, not changing the searching style that you put in words and could search something related to them. After I finished coding this site (,event though it's not perfect.), I faced CORS problem that you could not search anything with Twitter API. Beacuse of that, I started to use Pixabay API instead of it."
			// },
			{ y: "Learning programming languages", z: "JavaScript，HTML&CSS, C etc.." },
			{ y: "Learning flamework", z: "React， Node.js" },
			{ y: "Learning database language", z: "mySQL" },
		];
		return (
			<div class="All">
				<header>
					<div className="profile-header">
						<a href="#"
							className="back-link"
							onClick={
								this.handleToAboutPage
							}
						>BACK</a>
						<a href="#" className="login"
						>LOGIN
						</a>
					</div>
				</header>
				<body>
					<div className="profile-wrapper">
						<div className="profile-title">
							<h1><span className="under">THANK YOU FOR YOUR ACCESS</span> </h1>
							{/* <p><span className="under">It will be glad if you enjoyed my work.</span></p> */}
						</div>
					</div>

					<div className="profile-contents">
						<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
						<p><i class="fas fa-cat"></i>about me</p>
						{MyprofileList.map((item) => {
							return (
								<table border="1">
									<tr align="center">
										<th>{item.y}</th>
										<td>{item.z}</td>
									</tr>
								</table>
							)
						})}
						<table border="1">
							{/* <tr>
                                    <th>my Twitter</th>
                                    <td>
                                        <a href="https://twitter.com/misuzz93" target="_blank" rel="noopener noreferrer">my twitter account</a>
                                    </td>
                                </tr> */}
							<tr>
								<th>my GitHub</th>
								<td>
									<a href="https://github.com/misuzz" target="_blank" rel="noopener noreferrer">Click here</a>
								</td>
							</tr>
						</table>

					</div>
					<footer>
						<p>I have been fixing many problems in this site. </p>
						<p>It would be appreciated if you would look over me.</p>
						<p>Thank you.</p>
					</footer>
					<div class="bubbles">
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>
						<div class="bubble"></div>

					</div>


				</body>
			</div >
		)
	}

}

export default withRouter(Myprofile);