import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import AddCities from './containers/AddCities/AddCities';
import {GlobalStore} from "./redux/GlobalStore";
import './style/app.scss';
import * as moment from 'moment';

// Set default format
(moment as any).defaultFormat = 'YYYY/MM/DD';

render((
    <Provider store={GlobalStore}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/newtrip" component={AddCities} />
        </Router>
    </Provider>
), document.getElementById('app'));
