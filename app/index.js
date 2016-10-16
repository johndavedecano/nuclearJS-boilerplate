import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'nuclear-js-react-addons'

import reactor from './stores/reactor';
import routes from './routes';

ReactDOM.render(
    <Provider reactor={reactor}>
        <Router history={browserHistory} children={routes} />
    </Provider>,
    document.getElementById('root')
);