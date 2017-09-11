import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';

// import all action creators
import * as AddPlaceActions from './AddPlace/actions';
import * as AuthenticationActions from './Authentication/actions';
import * as HomesActions from './Homes/actions';
import * as MapActions from './Map/actions';
import * as ProfileActions from './Profile/actions';

function mapStateToProps(state) {
    return {
        authentication: state.authentication,
        addPlace: state.addPlace,
        homes: state.homes,
        map: state.map,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...AuthenticationActions,
        ...AddPlaceActions,
        ...HomesActions,
        ...MapActions,
        ...ProfileActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);