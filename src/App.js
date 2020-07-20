import React, { Component } from 'react';
import Confetti from 'react-confetti';
import './App.scss';

class App extends Component {
  state = {
    isShow : false,
    menus: ['부쭈', '동경규동', '을지다락', '낭만짬뽕', '육수당', '진작', '칼국수', '연미식당', '파인트룸', '파스타마켓', '서울카츠', '낭만살롱', '수제버거' ,'새로운 곳!'],
    todayMenu: ''
  };

  componentDidMount() {
    document.title = '점심 뭐먹지';
  }

  chooseMenu = () => {
    let i = Math.floor(Math.random() * this.state.menus.length);
    this.setState({
      isShow: true,
      todayMenu: this.state.menus[i]
    });
  }

  resetState = () => {
    this.setState({
      isShow: false
    });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.isShow ? <Confetti gravity={0.3} recycle={false} numberOfPieces={400} onConfettiComplete={() => this.resetState()} /> : ''}
        <div className="title-wrapper"></div>
        <div className="content-wrapper">
          <div className="result-wrapper">
            <div className="result-title">오늘으 메뉴</div>
            <div className="result-content">{this.state.todayMenu === '' ? '두구두구🥁' : this.state.todayMenu}</div>
          </div>
          <div className="lotto-wrapper">
            <button onClick={() => this.chooseMenu()}>메뉴 고르기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;