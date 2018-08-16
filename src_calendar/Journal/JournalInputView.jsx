import React, { Component } from "react"; 
import "./styles.css";



export default class JournalInputView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="journal-input-view">
        <Input title={"媽咪體重"} name="mom-weight" />
      </div>
    );
  }
}



export class Input extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const name = this.props.name;
    const title = this.props.title;

    return(
      <div className="input">
        <div>{title}</div>
        <input className="input-block" type="text" name={name}></input>
      </div>
    );
  }
}