import React from 'react';
import { browserHistory } from 'react-router';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { handleLogout } = this.props;

        // clear the profile, local storage, redirect to home
        handleLogout({}).then(() =>
            browserHistory.push('/')
        )
    }

    render() {
        return (<LoadingScreen />)
    }
}

export default Logout;
