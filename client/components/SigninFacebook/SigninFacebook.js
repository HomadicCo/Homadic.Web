import React from 'react';
import { Link } from 'react-router';
import queryString from 'query-string';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);
        let parsedQueryString = queryString.parse(location.search);

        props.handlePerformLogin(parsedQueryString.code).then(() => {
            props.handleGetProfile();
        });
    }

    render() {
        let { profile } = this.props;

        return (
            <div>
                <h3>{!!profile.data.email ? "Logged in" : "Logging in"}</h3>
                <p>{profile.data.name}</p>
                <p>{profile.data.email}</p>
            </div>
        )
    }
}

export default SigninFacebook;
