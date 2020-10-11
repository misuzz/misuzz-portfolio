import React from 'react';
import { withRouter } from 'react-router';


class Myplofile extends React.Component {
    handleToAboutPage = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='head'>
                <div className="top-wrapper">
                    <div className="container">
                        <h1>THANK YOU FOR YOUR ACCESS</h1>
                        <p>I will be glad if you read it through.</p>
                        <div class="btn-wrapper">
                            <a href="#" class="btn signup">あっち</a>
                            <p>or</p>
                            <a href="#" class="btn facebook">こっち</a>
                            <a href="#" class="btn twitter">そっち</a>
                        </div>
                    </div>
                </div>
                <div class="lesson-wrapper">
                </div>
                <div class="message-wrapper">
                </div>
                <footer>
                </footer>
            <a
                className="Back-link"
                onClick={
                    this.handleToAboutPage
                }
            >
                BACK
        </a>
            </div >
        )
    }

}

export default withRouter(Myplofile);