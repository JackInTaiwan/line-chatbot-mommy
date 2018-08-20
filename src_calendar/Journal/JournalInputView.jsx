import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import "./styles.css";



export default class JournalInputView extends Component {
  constructor(props){
    super(props);
    this.userId = this.props.userId;
    console.log("JournalInputView get userId", this.userId);

    this.state = {
      selectedUnderline: "",
      data: {
        userId: "",
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

  componentDidMount() {
    this.setState((prev) => {
      let newState = prev;
      newState.data.userId = this.userId;
      console.log("componentWillMount set new userId", newState);
      return newState;
    })
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
    fetch('http://localhost:8000/calendar_item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.data)
    })
    .then((res) => {
      console.log("API calendar_item [POST]:", res.status);
    })
    .then(()=> {
      setTimeout(function(){
        console.log('A');
    },5000);
    })
  }



  render() {
    return(
      <div className="journal-input-view">
        <Input onChange={this.inputOnChange} value={this.state.data.content.momWeight} title={"媽咪體重"} tail={"kg"} name="momWeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "momWeight"}/>
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyWeight} title={"Baby體重"} tail={"g"} name="babyWeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "babyWeight"} />
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyHeight} title={"Baby身長"} tail={"cm"} name="babyHeight" inputWidth={50} parent={this} underlineToggle={this.state.selectedUnderline == "babyHeight"} />
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