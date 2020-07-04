import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import AddCities from './containers/AddCities/AddCities';
import { GlobalStore } from './redux/GlobalStore';
import './style/app.scss';
import * as moment from 'moment';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Set default format
(moment as any).defaultFormat = 'YYYY/MM/DD';

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={GlobalStore}>
                <Router history={browserHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/newtrip" component={AddCities} />
                </Router>
            </Provider>
        </DndProvider>
    );
};

const root = document.getElementById('app');
render(<App />, root);
