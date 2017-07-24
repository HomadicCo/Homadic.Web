import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';

// import all action creators
import * as AuthenticationActions from './Authentication/actions';
import * as NoteActions from './Note/actions';
import * as ProfileActions from './Profile/actions';

function mapStateToProps(state) {
    return {
        notes: state.notes,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...AuthenticationActions,
        ...NoteActions,
        ...ProfileActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);