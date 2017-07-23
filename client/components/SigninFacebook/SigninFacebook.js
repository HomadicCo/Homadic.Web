import React from 'react';
import { Link } from 'react-router';
import queryString from 'query-string';

class SigninFacebook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parsed = queryString.parse(location.search);
        console.log(parsed);
        return (
            <div>
                <p>Logging in</p>
                <p>{parsed.code}</p>
            </div>
        )
    }
}

export default SigninFacebook;
