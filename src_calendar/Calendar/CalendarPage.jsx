import React, { Component } from "react";
import CalendarItemsView from "./CalendarItemsView";
import CalendarView from "./CalendarView";
import FloatMenu from	"./FloatMenu";

import "react-day-picker/lib/style.css";
import "./styles.css";

import data from "./data.json"



export default class CalendarPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			selectedDate: new Date(),
			floatMenuToggle: false,
		}

		this.mergeAdditionalJournal = this.mergeAdditionalJournal.bind(this);
	}

	mergeAdditionalJournal(additionalData) {
		this.setState((prev) => {
			let newState = prev;
			newState.data.journal.push(additionalData);
			return newState;
		})
	}

	componentDidMount() {
		const additionalData = this.props.location.state ? this.props.location.state.data : null;
		if (additionalData) {
			this.mergeAdditionalJournal(additionalData);
		}
  }
	
	render() {
		return (
			<div className="calendar-page">
				<CalendarView parentPage={this} data={this.state.data} selectedDate={this.state.selectedDate} />
				<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				{this.state.floatMenuToggle ? <FloatMenu selectedDate={this.state.selectedDate}/> : null }
			</div>
    );
	}
}