import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);
        const params = queryString.parse(location.search);

        // handle the login and redirect
        props.handlePerformLogin(params.code).then(() =>
            props.handleGetProfile().then(() =>
                browserHistory.push(!!params.state ? params.state : "/")
            )
        ).catch((e) => console.log(e));
    }

    render() {
        return (
            <div>
                <div className="loading-screen">
                    <h2><FontAwesome name="plane" size="2x" className="blue" spin /></h2>
                </div>
            </div>
        )
    }
}

export default SigninFacebook;
