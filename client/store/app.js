import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';
import AppViewAuthenticated from '../components/AppFrames/AppViewAuthenticated';

// import all action creators
import * as AddListingActions from './AddListing/actions';
import * as AuthenticationActions from './Authentication/actions';
import * as FilterActions from './Filter/actions';
import * as ListingActions from './Listing/actions';
import * as ListingHistoryActions from './ListingHistory/actions';
import * as MapActions from './Map/actions';
import * as ProfileActions from './Profile/actions';
import * as UIActions from './UI/actions';

function mapStateToProps(state) {
    return {
        authentication: state.authentication,
        addListing: state.addListing,
        filter: state.filter,
        listings: state.listings,
        listingHistory: state.listingHistory,
        map: state.map,
        profile: state.profile,
        ui: state.ui,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...AuthenticationActions,
        ...AddListingActions,
        ...FilterActions,
        ...ListingActions,
        ...ListingHistoryActions,
        ...MapActions,
        ...ProfileActions,
        ...UIActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);

export const AppAuthenticated = connect(mapStateToProps,
    mapDispatchToProps)(AppViewAuthenticated);