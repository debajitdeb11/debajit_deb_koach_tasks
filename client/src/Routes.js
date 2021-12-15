import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "./welcome";
import App from "./App";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/welcome" render={< Welcome />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}