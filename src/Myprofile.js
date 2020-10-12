import React from 'react';
import './Myprofile.css';
import { withRouter } from 'react-router';


class Myprofile extends React.Component {
    handleToAboutPage = () => {
        this.props.history.push('/')
    }
    render() {
        const MyprofileList = [
            { y: "creater", z: "misuzz" },
            { y: "age", z: "twenties" },
            { y: "start date of learning engineering", z: "since late August in 2020" },
            {
                y: "reason why I created this",
                z: "First, I wanted to create that you could search and know the zoo in Japan which there are animals you put in the search box in. However,there were no such APIs which covered where any animals were. Therefore, I changed what you could search, not changing the searching style that you put in words and could search something related to them."
            },
            { y: "Learning programming languages", z: "JavaScript，HTML&CSS" },
            {y: "Learning flamework", z:"React， Node.js"},
            {y:"Learning database language", z:"mySQL"},
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
                            <h1>THANK YOU FOR YOUR ACCESS</h1>
                            <p>I will be glad if you enjoyed my work.</p>
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
                            <tr>
                                <th>my Twitter</th>
                                <td>
                                    <a href="https://twitter.com/porfolio1" target="_blank" rel="noopener noreferrer">my twitter account</a>
                                </td>
                            </tr>
                            <tr>
                                <th>my GitHub</th>
                                <td>
                                    <a href="https://github.com/misuzz"target="_blank" rel="noopener noreferrer">my GitHub account</a>
                                </td>
                            </tr>
                        </table>
                    </div>


                    <footer>
                        <p>I have known there are many imprivements such as 'you cannot open any even though pushing 'LOGIN' button.'and so on. </p>
                        <p>I have been fixing them. </p>
                        <p>It would be appreciated if you would look over me.</p> 
                        <p>Thank you.</p>
                    </footer>
                </body>
            </div >
        )
    }

}

export default withRouter(Myprofile);