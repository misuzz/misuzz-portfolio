import React from 'react';
import './Main.css';
import Search from './Search';　//.jsのファイルだからこの書き方（✗ import './Search.js'）//
import Animal from './Animal-img';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  // handleToAboutPage = () => {
  //   this.props.history.push('/Myplofile')


  render() {
    return (
      <div className="MainPage">

        {/* drawer */}
        <header className="header">
          <LeftDrawer />
        </header>

        {/* Title and explanation */}
        <div className="top-wrapper">
          <div className="scroll">
            <img src="https://3.bp.blogspot.com/-QVGubVc32XU/W5H_-0tHnRI/AAAAAAABOxQ/UaOIPRAM6jgFl1t8H632j6Yr1jxjxCt6wCLcBGAs/s800/pet_robot_soujiki_cat.png" className="movingCat" alt="ロボット掃除機に乗る猫のイラスト" />
          </div>
          <div className="title-container">
            <img src={Animal} className="Animal-logo1" alt="木に群がる動物" />
            <h1>Serching Images</h1>
            <img src={Animal} className="Animal-logo2" alt="木に群がる動物" />
            <h2>through Pixabay</h2>
          </div>
          <div className="txt-container">
            <p>You can search copyleft images from Pixabay.</p>
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
          {/* onClick={
              this.handleToAboutPage
            } */}
          <Link to="/Myprofile">
            about <span > me </span>
          </Link>
        </footer>
        <a href="https://pixabay.com/">
          <img src="https://pixabay.com/static/img/public/leaderboard_a.png" className="Pixabay" alt="Pixabay" />
        </a>

      </div >
    )
  };
}

export default Main;