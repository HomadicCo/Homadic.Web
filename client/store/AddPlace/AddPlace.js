import React from 'react';
import FontAwesome from 'react-fontawesome';
import { apiValidateToken } from '../../api';
import { getLoginUrl } from '../../functions';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

class AddPlace extends React.Component {
    constructor(props) {
        super(props)

        const loginUrl = getLoginUrl(window.location.pathname);

        if (props.authentication.isLoggedIn) {
            apiValidateToken().catch(() => {
                window.location.replace(loginUrl);
            });
        } else {
            window.location.replace(loginUrl);
        }

    }

    renderComponents() {
        return (
            <div className="container">
                <p>Hey</p>
            </div>
        )
    }

    render() {
        let { authentication } = this.props;

        return (
            authentication.isLoggedIn ? this.renderComponents() : <LoadingScreen />
        )
    }
}

export default AddPlace;