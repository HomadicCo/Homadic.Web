import React from 'react';
import { browserHistory } from 'react-router';
import queryString from 'query-string';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);
        let parsedQueryString = queryString.parse(location.search);

        // handle the login and redirect
        props.handlePerformLogin(parsedQueryString.code).then(() => {
            browserHistory.push("/");
        }).catch((e) => console.log(e));
    }

    render() {
        return (
            <div>
                <h3>Logging in...</h3>
            </div>
        )
    }
}

export default SigninFacebook;
