import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';

// import all action creators
import * as AuthenticationActions from './Authentication/actions';
import * as MapActions from './Map/actions';
import * as ProfileActions from './Profile/actions';

function mapStateToProps(state) {
    return {
        authentication: state.authentication,
        map: state.map,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...AuthenticationActions,
        ...MapActions,
        ...ProfileActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);