import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingPage from "./Setting/SettingPage";
import AddingPage from "./Adding/AddingPage";
import SyncPage from "./Sync/SyncPage";

import "./styles.css"



render((
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={SettingPage} />
            <Route path="/add" component={AddingPage} />
            <Route path="/sync" component={SyncPage} />
        </Switch>
    </BrowserRouter>
    )
    , document.getElementById("container")
);