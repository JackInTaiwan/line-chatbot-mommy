import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CalendarPage from "./Calendar/CalendarPage";
import JournalPage from "./Journal/JournalPage";



render((
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" exact={true} authed component={CalendarPage} />
            <Route path="/journal" authed component={JournalPage} />
            <Route path="/reminder" authed component={ReminderPage} />
            <Route path="/diary" authed component={ReminderPage} />
        </Switch>
    </BrowserRouter>
    )
    , document.getElementById("container")
);