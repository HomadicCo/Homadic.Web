import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';
import AppViewAuthenticated from '../components/AppFrames/AppViewAuthenticated';

// import all action creators
import * as AddListingActions from './AddListing/actions';
import * as AuthenticationActions from './Authentication/actions';
import * as HomeActions from './Home/actions';
import * as MapActions from './Map/actions';
import * as ProfileActions from './Profile/actions';

function mapStateToProps(state) {
    return {
        authentication: state.authentication,
        AddListing: state.AddListing,
        homes: state.homes,
        map: state.map,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...AuthenticationActions,
        ...AddListingActions,
        ...HomeActions,
        ...MapActions,
        ...ProfileActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView); 

export const AppAuthenticated = connect(mapStateToProps,
    mapDispatchToProps)(AppViewAuthenticated);