import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import "./styles.css";



export default class JournalInputView extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUnderline: "",
      data: {
        id: 100,
        cate: "journal",
        year: this.props.date.getFullYear(),
        month: this.props.date.getMonth(),
        date: this.props.date.getDate(),
        title: "第10週產檢",
        content: {
          momWeight: "",
          babyWeight: "",
          babyHeight: "",
        }
      }
    }

    this.inputOnChange = this.inputOnChange.bind(this);
    this.saveButtonOnClick = this.saveButtonOnClick.bind(this);
  }

  inputOnChange(event, cate) {
    let value = event.target.value;
    console.log(this.state.data.content);
    this.setState((prev) => {
      let newState = prev;
      newState.data.content[cate] = value;
      return newState;
    })
  }

  saveButtonOnClick() {
    fetch('http://172.104.34.165:8000/article/article', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: "知識小學堂文章標題",
        content: "文章內容",
        raw: "文章內容raw",
        tag: "文章標籤"
      })
    })
    .then((res) => {
      console.log(res.status);
      return res.json()
    })
    .then((body) => {
      console.log(body);
    })
  }


  render() {
    return(
      <div className="journal-input-view">
        <Input onChange={this.inputOnChange} value={this.state.data.content.momWeight} title={"媽咪體重"} tail={"kg"} name="momWeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "mom-weight"}/>
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyWeight} title={"Baby體重"} tail={"g"} name="babyWeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "baby-weight"} />
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyHeight} title={"Baby身長"} tail={"cm"} name="babyHeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "baby-height"} />
        <div className="save-button">
          <div className="save-underline"></div>
          <div className="save-font-container">
            <Link to={{pathname:"/", state:{data: this.state.data}}}>
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
          <input onChange={(e) => {this.props.onChange(e, name)}}  className="input-block" type="text" name={name} style={{color: fontColor}}></input>
          {underlineToggle ? <div className="input-tail" style={{color: fontOnColor}}>{tail}</div> : null}
          {underlineToggle ? <div className="input-underline"></div> : null}
        </div>
      </button>
    );
  }
}