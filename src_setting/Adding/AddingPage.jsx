import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

library.add(
  faChild,
)



export default class AddingPage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      selectedUnderline: "",
      babyName: "Marco",
      expectedBirthDate: "2019/03/22",
      gender: "女",
      saveBtnColor: "#f885d6",
      boyOpacity: 0.3,
      girlOpacity: 1,
    }
    this.genderBoyWordList = ["boy", "male", "man", "男", "男孩", "男性"]
    this.genderGirlWordList = ["girl", "female", "woman", "女", "女孩", "女性"]
    this.boyColor = "#58a6f3";
    this.girlColor = "#f885d6";

    this.inputOnChange = this.inputOnChange.bind(this);
    this.saveBtnOnClick = this.saveBtnOnClick.bind(this);
    this.genderOptionOnClick = this.genderOptionOnClick.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }


  inputOnChange(event, cate) {
    let value = event.target.value;
    this.setState((prev) => {
      let newState = prev;
      prev[cate] = value;
      return newState;
    })

    if (cate == "gender") {
      let inputGender = event.target.value;
      if (this.genderBoyWordList.indexOf(inputGender) != -1){
        this.setState({saveBtnColor: this.boyOpacity, gender:"男"});
      } else if (this.genderGirlWordList.indexOf(inputGender) != -1){
        this.setState({saveBtnColor: this.girlOpacity, gender:"女"});
      }
    }
  }


  genderOptionOnClick(gender) {
    console.log("use")
    if (gender == "boy") {
      this.setState({boyOpacity: 1.0, girlOpacity: 0.3, saveBtnColor:this.boyColor, gender:"男"})
    } else if (gender == "girl") {
      this.setState({boyOpacity: 0.3, girlOpacity: 1.0, saveBtnColor:this.girlColor, gender:"女"})
    }
  }


  saveBtnOnClick() {
    this.sendMessage()
  }


  sendMessage() {
    let message = `
    [ 基本設定 ]
    寶寶名字： ${this.state.babyName}
    預產期： ${this.state.expectedBirthDate}
    性別： ${this.state.gender}
    `;
    let messageNotification = 
    `恭喜媽咪懷孕第十週囉～～
媽咪要多多照顧自己唷
https://mamibuy.com.tw/talk/forum/topic/81243`;

    liff.sendMessages([
      {
        type: 'text',
        text: message,
      },
      {
        type: 'text',
        text: messageNotification,
      }
    ])
    .then(() => {
      console.log('message sent');
      this.closeWindow();
    })
    .catch((err) => {
      console.log('error', err);
    });
  }


  closeWindow() {
    liff.closeWindow()
  }


  render() {
    return(
      <div className="adding-page">
        <Input onChange={this.inputOnChange} value={this.state.babyName} title={"寶寶名字"} tail={""} name="babyName" style={{flex: 0.5, maxWidth:150}} parent={this} underlineToggle={this.state.selectedUnderline == "babyName"}/>
        <Input onChange={this.inputOnChange} value={this.state.expectedBirthDate} title={"預產期"} tail={""} name="expectedBirthDate" style={{flex: 0.5, maxWidth:150}} parent={this} underlineToggle={this.state.selectedUnderline == "expectedBirthDate"}/>
        {/* <Input onChange={this.inputOnChange} value={this.state.gender} title={"性別"} tail={""} name="gender" style={{width:50}} parent={this} underlineToggle={this.state.selectedUnderline == "gender"}/> */}
        <div className="gender-block">
          <input className="input-title-font" disabled={true} value={"性別"} />
          <button className="gender-option" onClick={() => {this.genderOptionOnClick("boy")}} style={{color:this.boyColor, opacity:this.state.boyOpacity}} >{"男"}</button>
          <button className="gender-option" onClick={() => {this.genderOptionOnClick("girl")}} style={{color:this.girlColor, opacity:this.state.girlOpacity}}>{"女"}</button>
        </div>
        <div className="adding-underline"></div>
        <Link className="save-btn" to={{pathname: "/"}} onClick={this.saveBtnOnClick}>
          <FontAwesomeIcon 
            icon="child"
            color={this.state.saveBtnColor}
            size="2x"
          />
        </Link>
      </div>
    );
  }
}



export class Input extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.props.parent.setState((prev) => {
      let newState = prev;
      newState.selectedUnderline = this.props.name;
      return newState;
    })
  }


  render() {
    const name = this.props.name;
    const title = this.props.title;
    const value = this.props.value;
    const tail = this.props.tail;
    const style = this.props.style;
    const underlineToggle = this.props.underlineToggle;
    const fontColor = "#be5035";
    const fontOpacity = underlineToggle ? 1 : 0.3;

    return(
      <button className="input" onClick={this.onClick}>
        <input className="input-title-font" disabled={true} value={title}></input>
        <div className="input-container" style={style}>
          <input onChange={(e) => {this.props.onChange(e, name)}}  className="input-block" type="text" name={name} style={{color: fontColor, opacity:fontOpacity}} value={value}></input>
          {underlineToggle ? <div className="input-tail" style={{color: fontColor}}>{tail}</div> : null}
          {underlineToggle ? <div className="input-underline" style={{backgroundColor: fontColor}}></div> : null}
        </div>
      </button>
    );
  }
}