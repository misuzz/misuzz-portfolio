import React from 'react';
import './App.css';
import { withRouter } from 'react-router';
import Search from './Search';　//.jsのファイルだからこの書き方（✗ import './Search.js'）//
import Animal from './Animal-img';
import LeftDrawer from './LeftDrawer';

class HOME extends React.Component {
    handleToAboutPage = () => {
      this.props.history.push('/myplofile')
    }
  
    render() {
        const mainTitle = "Serching Images from Any Words"
        const subTitle = "through Twitter"
      return (
        <div className="App">
        <header className="App-header">
          <LeftDrawer />
          <img src={Animal} className="Animal-logo" alt="木に群がる動物" />
          <h1>{mainTitle}</h1>
          <h2>{subTitle}</h2>
        </header>

        <body className="App-body">
          <div>
            <Search />
          </div>
        </body>

        <footer className="App-footer">
          <a href="#"
            className="App-link"
            onClick={
              this.handleToAboutPage
            }
          >
            about <span class="two"> me </span>.
        </a>
        </footer>

      </div>
      )
    };
  };
  
  export default withRouter(HOME)