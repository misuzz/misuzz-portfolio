import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

function App() {
  const mainTitle = "Serching Animal Images"
  const subTitle = "through Twitter"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{mainTitle}</h1>
          <h2>{subTitle}</h2>
          <Search />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            なんかリンク貼る？
        </a>
        </header>
        <body className= "allimages">
        </body>  
      </div>
    );
  };

export default App;
