import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Random extends React.Component {

  render() {
    return(
      <div>test</div>
    );
  }

}
function Intro(props){
  if(props.isClicked === false){
      return(
        <React.Fragment>
        <button
        onClick = {props.onClick}
        >
        Introduction
        </button>
        <h2>This is not the introduction.</h2>
        </React.Fragment>
      );
  }
  else {
    return (
      <React.Fragment>
      <button
      onClick = {props.onClick}
      >
      Introduction
      </button>
      <h2>Hello, this is the introduction.</h2>
      </React.Fragment>

    );
  }
}
class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: [true,false,false,false,false],
      page: <div>yeah, here's the content</div>,
    }
  }
  handleClick(i) {
    console.log("Flipping"+ i)
    let TempIsClicked = this.state.isClicked;
    let ButtonBeingHandled = TempIsClicked[i];
    ButtonBeingHandled  = !ButtonBeingHandled;
    TempIsClicked[i] = ButtonBeingHandled;
    this.setState({
      isClicked: TempIsClicked,
    })
  }
  render() {
    const IntroClicked = this.state.isClicked[0];
    const CurrentPage = this.state.page
    return(
      <div className="AppBar">
        <div className="IntroButton">
          <Intro
          isClicked = {IntroClicked}
          Introduction = {CurrentPage}
          onClick={this.handleClick.bind(this,0)}
          />
        </div>
      </div>
    );
  }

}


ReactDOM.render(
  <AppBar />,
document.getElementById('root')
);

/*<div
style={{
  display: 'flex',
  alignItems: 'Right',
  height: '100vh'
}}
>
<h1>DNIYM</h1> */