import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import "./styles.css";



export default class JournalInputView extends Component {
  constructor(props){
    super(props);
    this.url = "https://line-bot-mommy.herokuapp.com"
    //this.url = "http://localhost:8000"
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
    this.sendMessage = this.sendMessage.bind(this);
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
    if (cate == "title") {
      let value = event.target.value;
      this.setState((prev) => {
        let newState = prev;
        prev.data.title = value;
        return newState;
      })
    } else {
      let value = event.target.value;
      console.log(this.state.data.content);
      this.setState((prev) => {
        let newState = prev;
        newState.data.content[cate] = value;
        return newState;
      })
    }
  }


  sendMessage() {
    let message = `
    [ 媽咪手冊 ]
    時間： ${this.state.data.year}/${this.state.data.month}/${this.state.data.date}
    標題： ${this.state.title}
    媽咪體重： ${this.state.data.content.momWeight}
    Baby體重： ${this.state.data.content.babyWeight}
    Baby身長： ${this.state.data.content.babyHeight}
    `

    liff.sendMessages([
      {
        type: 'text',
        text: message
      }
    ])
    .then(() => {
      console.log('message sent');
    })
    .catch((err) => {
      console.log('error', err);
    });
  }


  saveButtonOnClick() {
    fetch(`${this.url}/calendar/calendar_item`, {
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

    fetch(`https://line-mommy-baby.herokuapp.com/reminder`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.userId,
        year: this.state.data.year,
        month: (this.state.data.month + 1),
        date: this.state.data.date,
      })
    })
    .then((res) => {
      console.log("API reminder [POST]:", res.status);
    })

    this.sendMessage();
    
  }



  render() {
    return(
      <div className="journal-input-view">
        <Input onChange={this.inputOnChange} value={this.state.data.title} title={"標題"} tail={""} name="title" style={{flex:1}} parent={this} underlineToggle={this.state.selectedUnderline == "title"}/>
        <Input onChange={this.inputOnChange} value={this.state.data.content.momWeight} title={"媽咪體重"} tail={"kg"} name="momWeight" style={{width:50}} parent={this} underlineToggle={this.state.selectedUnderline == "momWeight"}/>
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyWeight} title={"Baby體重"} tail={"g"} name="babyWeight" style={{width:50}} parent={this} underlineToggle={this.state.selectedUnderline == "babyWeight"} />
        <Input onChange={this.inputOnChange} value={this.state.data.content.babyHeight} title={"Baby身長"} tail={"cm"} name="babyHeight" style={{width:50}} parent={this} underlineToggle={this.state.selectedUnderline == "babyHeight"} />
        <div className="save-button">
          <div className="save-underline"></div>
          <Link to={{pathname:"/", state:{data: this.state.data}}}>
            <button className="save-font-container" onClick={this.saveButtonOnClick}>
              <div className="save-font">儲存</div>
            </button>
          </Link>
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
    const value = this.props.value;
    const tail = this.props.tail;
    const style = this.props.style;
    const underlineToggle = this.props.underlineToggle;
    const fontOnColor = "#858383";
    const fontOffColor = "#aaaaaa";
    const fontColor = underlineToggle ? fontOnColor : fontOffColor;

    return(
      <button className="input" onClick={this.onClick}>
        <input className="input-title-font" disabled={true} value={title}></input>
        <div className="input-container" style={style}>
          <input onChange={(e) => {this.props.onChange(e, name)}}  className="input-block" type="text" name={name} style={{color: fontColor}} value={value}></input>
          {underlineToggle ? <div className="input-tail" style={{color: fontOnColor}}>{tail}</div> : null}
          {underlineToggle ? <div className="input-underline"></div> : null}
        </div>
      </button>
    );
  }
}