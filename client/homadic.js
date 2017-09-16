import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/App.scss';

// Import Components
import { App, FullScreen } from './store/App';
import SigninFacebook from './components/SigninFacebook/SigninFacebook';
import Index from './store/Index/Index';
import AddPlace from './store/AddPlace/AddPlace';
import Map from './store/Map/Map';
import Home from './store/Homes/Home';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}></IndexRoute>
                <Route path="/signin-facebook" component={SigninFacebook} />
                <Route path="/home(/:id)" component={Home} />
                <Route path="/add(/:step)" component={AddPlace} />
                <Route path="/:citySlug" component={Map} />
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
