import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';

// import all action creators
import * as NoteActions from './Note/actions';

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...NoteActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);