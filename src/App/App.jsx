import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../_helpers';
import { GlobalNav, GlobalFooter } from '../_components';
import { HomePage } from '../Pages';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            window.scrollTo(0, 0);
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                    <GlobalNav/>
                        <Switch>
                            <Route path="/" exact component={HomePage}></Route>
                        </Switch>
                    <GlobalFooter/>
                    </div>
                </Router>
            </div>
        );
    }
}