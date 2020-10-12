import React from 'react';
import './Main.css';
import { withRouter } from 'react-router';
import Search from './Search';　//.jsのファイルだからこの書き方（✗ import './Search.js'）//
import Animal from './Animal-img';
import LeftDrawer from './LeftDrawer';

class Main extends React.Component {
  handleToAboutPage = () => {
    this.props.history.push('/myplofile')
  }

  render() {
    return (
      <div className="MainPage">

        {/* drawer */}
        <header className="header">
          <LeftDrawer />
        </header>

        {/* Title and explanation */}
        <div className="top-wrapper">
          <div className="title-container">
            <img src={Animal} className="Animal-logo1" alt="木に群がる動物" />
            <h1>Serching Images</h1>
            <h2>through Twitter</h2>
            <img src={Animal} className="Animal-logo2" alt="木に群がる動物" />
          </div>
          <div className="txt-container">
            <p>You can search images from the 100 recent tweets</p>
            <p> which were tweeted with a keyword you put in below.</p>
            <div className="caution">
              <p>※Please excuse my no setting safesearch filter.※</p>
            </div>
          </div>
        </div>

        {/* searching part*/}
        <div className="Seaching-wrapper">
          <div className="container">
            <Search />
          </div>
        </div>

        {/* footer (screen transition) */}
        <footer className="footer">
          <a
            onClick={
              this.handleToAboutPage
            }
          >
            about <span > me </span>
          </a>
        </footer>

      </div>
    )
  };
};

export default withRouter(Main)