import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/App.scss';

// Import Components
import { App, AppAuthenticated } from './store/App';
import SigninFacebook from './components/SigninFacebook/SigninFacebook';
import Index from './store/Index/Index';
import AddPlace from './store/AddPlace/AddPlace';
import Home from './store/Home/Home';
import Map from './store/Map/Map';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route component={AppAuthenticated}>
                <Route path="/add(/:step)" component={AddPlace} />
            </Route>
            <Route path="/" component={App}>
                <IndexRoute component={Index}></IndexRoute>
                <Route path="/signin-facebook" component={SigninFacebook} />
                <Route path="/home/:homeSlug" component={Home} />
                <Route path="/:citySlug" component={Map} />
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
