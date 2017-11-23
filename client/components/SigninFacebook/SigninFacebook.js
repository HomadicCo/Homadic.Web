import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);
        const params = queryString.parse(location.search);

        // handle the login and redirect
        props.handlePerformLogin(params.code).then(() =>
            props.handleGetProfile().then(() =>
                browserHistory.push(params.state ? params.state : '/')
            )
        ).catch((e) => console.log(e));
    }

    render() {
        return (
            <LoadingScreen />
        )
    }
}

export default SigninFacebook;
