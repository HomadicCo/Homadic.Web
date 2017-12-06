import React from 'react';
import { browserHistory, Link } from 'react-router';
import queryString from 'query-string';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            invalid_token: false
        }
    }

    componentWillMount() {
        let { handleGetProfile, handlePerformLogin } = this.props;
        const params = queryString.parse(location.search);

        // handle the login and redirect
        handlePerformLogin(params.code).then(() =>
            handleGetProfile().then(() =>
                browserHistory.push(params.state ? params.state : '/')
            )
        ).catch(() => this.setState({ invalid_token: true }));
    }

    render() {
        // TODO: allow reporting
        const invalidTokenString = 'It looks like you\'ve got an invalid access token. Report it?';

        return (
            this.state.invalid_token ? <div className="loading-screen"><p>{invalidTokenString} <Link to="/">Go home.</Link></p></div> : <LoadingScreen />
        )
    }
}

export default SigninFacebook;
