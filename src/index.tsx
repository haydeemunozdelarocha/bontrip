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
import {IntlProvider} from "react-intl";
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";
import {Register} from "./containers/Register/Register";

const messages: any = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

// Set default format
(moment as any).defaultFormat = 'YYYY/MM/DD';

const App = () => {
    return (
        <IntlProvider locale={language} defaultLocale={'en'} messages={messages[language]}>
            <DndProvider backend={HTML5Backend}>
                <Provider store={GlobalStore}>
                    <Router history={browserHistory}>
                        <Route path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/newtrip" component={AddCities} />
                    </Router>
                </Provider>
            </DndProvider>
        </IntlProvider>
    );
};

const root = document.getElementById('app');
render(<App />, root);
