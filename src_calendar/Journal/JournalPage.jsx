import React, { Component } from "react";
import { Link } from "react-router-dom"; 

import JournalHeadView from "./JournalHeaderView";
import JournalPhotoView from "./JournalPhotoView";
import JournalInputView from "./JournalInputView";

import "./styles.css";



export default class JournalPage extends Component {
	constructor(props) {
		super(props);
  }

  render() {
    return(
      <div className="journal-page">
        <JournalHeadView />
        <JournalPhotoView />
        <JournalInputView />
      </div>
    );
  }
}