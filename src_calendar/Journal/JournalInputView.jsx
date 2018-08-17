import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import "./styles.css";



export default class JournalInputView extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUnderline: "",
    }

    this.saveButtonOnClick = this.saveButtonOnClick.bind(this);
  }

  saveButtonOnClick() {
    console.log("use save");
  }

  render() {
    return(
      <div className="journal-input-view">
        <Input title={"媽咪體重"} tail={"kg"} name="mom-weight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "mom-weight"}/>
        <Input title={"Baby體重"} tail={"g"} name="baby-weight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "baby-weight"} />
        <Input title={"Baby身長"} tail={"cm"} name="baby-height" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "baby-height"} />
        <div className="save-button">
          <div className="save-underline"></div>
          <div className="save-font-container">
            <Link to="/">
              <button className="save-font" onClick={this.saveButtonOnClick}>儲存</button>
            </Link>
          </div>
        </div>
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
    const tail = this.props.tail;
    const inputWidth = this.props.inputWidth;
    const underlineToggle = this.props.underlineToggle;
    const fontOnColor = "#858383";
    const fontOffColor = "#cccccc";
    const fontColor = underlineToggle ? fontOnColor : fontOffColor;

    return(
      <button className="input" onClick={this.onClick}>
        <div className="input-title-font">{title}</div>
        <div className="input-container" style={{width: inputWidth}}>
          <input className="input-block" type="text" name={name} style={{color: fontColor}}></input>
          {underlineToggle ? <div className="input-tail" style={{color: fontOnColor}}>{tail}</div> : null}
          {underlineToggle ? <div className="input-underline"></div> : null}
        </div>
      </button>
    );
  }
}