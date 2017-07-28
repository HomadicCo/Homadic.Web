import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import { apiValidateToken } from '../../api';
import { getLoginUrl } from '../../functions';

class AddPlace extends React.Component {
    constructor(props) {
        super(props)

        const loginUrl = getLoginUrl(window.location.pathname);

        if (props.authentication.isLoggedIn) {
            apiValidateToken().catch(() => {
                browserHistory.push(loginUrl);
            });
        } else {
            browser.push(loginUrl);
        }

    }

    render() {
        let { profile } = this.props;

        return (
            <div className="container">
                <p>Hey</p>
            </div>
        )
    }
}

export default AddPlace;