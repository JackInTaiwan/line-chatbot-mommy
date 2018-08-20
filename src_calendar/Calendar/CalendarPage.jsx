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
			userId: "",
			data: data,
			selectedDate: new Date(),
			floatMenuToggle: false,
		}

		this.mergeAdditionalJournal = this.mergeAdditionalJournal.bind(this);
		this.getData = this.getData.bind(this);
	}

	mergeAdditionalJournal(additionalData) {
		this.setState((prev) => {
			let newState = prev;
			newState.data.journal.push(additionalData);
			return newState;
		})
	}

	componentWillMount() {
		const additionalData = this.props.location.state ? this.props.location.state.data : null;
		if (additionalData) {
			this.mergeAdditionalJournal(additionalData);
		}
		liff.init(
			data => {
			  this.setState({"userId":data.context.userId}, () => {
				  this.getData(this.state.userId);
			  })
			},
			error => {
				// for testing
				this.setState({"userId":"test"}, () => {
					this.getData(this.state.userId);
				})
			}
		);
	}

	getData(userId) {
		fetch(`http://localhost:8000/calendar_item?userId=${userId}`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			let body = res.json();
			return body;
		})
		.then((body) => {
			console.log(body);
		})
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