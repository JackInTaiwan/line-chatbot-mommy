import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "rc-calendar";


export default class CalendarPage extends Component {
	render() {
		return (
      <BrowserRouter basename="/">
        <Switch>
          <Route component={Icon} />
        </Switch>
      </BrowserRouter>
    );
	}
}