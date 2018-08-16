import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CalendarPage from "./Calendar/CalendarPage";
import JournalPage from "./Journal/JournalPage";



render((
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={CalendarPage} />
            <Route path="/journal" component={JournalPage} />
        </Switch>
    </BrowserRouter>
    )
    , document.getElementById("container")
);