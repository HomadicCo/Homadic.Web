import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/App.scss';

// Import Components
import { App, AppAuthenticated } from './store/App';
import SigninFacebook from './components/SigninFacebook/SigninFacebook';
import Logout from './components/Logout/Logout';
import Index from './store/Index/Index';
import AddListing from './store/AddListing/AddListing';
import Listing from './store/Listing/Listing';
import ListingHistory from './store/ListingHistory/ListingHistory';
import ListingVersion from './components/ListingVersion/ListingVersion';
import Map from './store/Map/Map';
import Profile from './store/Profile/Profile';
import AddImages from './components/EditListing/AddImages';
import EditAmenities from './components/EditListing/EditAmenities';
import EditBills from './components/EditListing/EditBills';
import EditContactDetails from './components/EditListing/EditContactDetails';
import EditNotes from './components/EditListing/EditNotes';
import EditRooms from './components/EditListing/EditRooms';
import EditSocialDetails from './components/EditListing/EditSocialDetails';
import EditType from './components/EditListing/EditType';
import EditInternet from './components/EditListing/EditInternet';

// Import Router
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import ReactGA from 'react-ga';

// google analytics
if (localStorage.getItem('test.apiUrl') == null) {
    ReactGA.initialize('UA-121445370-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const router = (
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route component={AppAuthenticated}>
                <Route path="/add(/:step)" component={AddListing} />
                <Route path="/profile" component={Profile} />
                <Route path="/listing/:listingSlug/amenities" component={EditAmenities} />
                <Route path="/listing/:listingSlug/bills" component={EditBills} />
                <Route path="/listing/:listingSlug/contact-details" component={EditContactDetails} />
                <Route path="/listing/:listingSlug/images" component={AddImages} />
                <Route path="/listing/:listingSlug/notes" component={EditNotes} />
                <Route path="/listing/:listingSlug/rooms" component={EditRooms} />
                <Route path="/listing/:listingSlug/social-details" component={EditSocialDetails} />
                <Route path="/listing/:listingSlug/type" component={EditType} />
                <Route path="/listing/:listingSlug/wifi" component={EditInternet} />
            </Route>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="/logout" component={Logout} />
                <Route path="/signin-facebook" component={SigninFacebook} />
                <Route path="/listing/:listingSlug" component={Listing} />
                <Route path="/listing/:listingSlug/history" component={ListingHistory} />
                <Route path="/listing/:listingSlug/history/:versionId" component={ListingVersion} />
                <Route path="/:citySlug" component={Map} />
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
