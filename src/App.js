import React from 'react';
import './App.css';
import Search from './Search';　//.jsのファイルだからこの書き方（✗ import './Search.js'）//
import Animal from './Animal-img';

function App() {
  const mainTitle = "Serching Animal Images"
  const subTitle = "through Twitter"
    return (
      <div className="App">
        <header className="App-header">
          <img src={Animal} className= "Animal-logo" alt="木に群がる動物" />
          <h1>{mainTitle}</h1>
          <h2>{subTitle}</h2>
        </header>

        <body className= "App-body">
          <div>
          <Search/>
          <h3>ここに画像を出す</h3>
          </div>
        </body>  

        <footer className= "App-footer">
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             about <span class="two"> me </span>.
        </a>
        </footer>

      </div>
    );
  };

export default App;
