import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CalendarPage from "./Calendar/CalendarPage";



render((
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" component={CalendarPage} />
        </Switch>
    </BrowserRouter>
    )
    , document.getElementById("container")
);