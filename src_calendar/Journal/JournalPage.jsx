import React, { Component } from "react";

import JournalHeadView from "./JournalHeaderView";
import JournalPhotoView from "./JournalPhotoView";
import JournalInputView from "./JournalInputView";

import "./styles.css";



export default class JournalPage extends Component {
	constructor(props) {
    super(props);
    this.date = this.props.location.state.date;
  }

  render() {
    const windowHeight = window.innerHeight;
    
    return(
      <div className="journal-page" style={{height: windowHeight}}>
        <JournalHeadView date={this.date}/>
        <JournalPhotoView />
        <JournalInputView />
      </div>
    );
  }
}