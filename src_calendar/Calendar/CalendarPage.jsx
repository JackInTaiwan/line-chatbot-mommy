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
		this.url = "http://line-bot-mommy.herokuapp.com"
		// this.url = "http://localhost:8000"
		this.state = {
			userId: "",
			data: {journal:[], reminder:[], diary:[]},
			selectedDate: new Date(),
			floatMenuToggle: false,
		}

		this.getData = this.getData.bind(this);
	}


	componentWillMount() {
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
		fetch(`${this.url}/calendar_item?userId=${userId}`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			return res.json();
		})
		.then((body) => {
			console.log("CalendarPage get body:", body)
			let newData = {journal:[], reminder:[], diary:[]}
			body.map((item) => {
				newData[item.cate].push(item);
			})
			this.setState({data: newData});
		})
		.then(console.log("newState", this.state))
	}
	
	render() {
		return (
			<div className="calendar-page">
				<CalendarView parentPage={this} data={this.state.data} selectedDate={this.state.selectedDate} />
				<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				{this.state.floatMenuToggle ? <FloatMenu userId={this.state.userId} selectedDate={this.state.selectedDate}/> : null }
			</div>
    );
	}
}