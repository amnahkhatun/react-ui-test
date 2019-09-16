import React from 'react'
import Inbox from './Inbox';
import Calendar from './Calendar';
import Career from './Career';
import Reports from './Reports';
import {Switch, Route } from 'react-router-dom';
import SelectionBar from './SelectionBar';

const NavBar = () => (
    <Switch>
        <Route exact path = "/jobs" component={SelectionBar}></Route>
        <Route path = "/inbox" component={Inbox}></Route>
        <Route path = "/calendar" component={Calendar}></Route>
        <Route path = "/career" component={Career}></Route>
        <Route path = "/reports" component={Reports}></Route>
    </Switch>
)

export default NavBar;