import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { loadLocalStorage } from '../../functions';

class AppView extends React.Component {
    constructor(props) {
        super(props);

        const auth = loadLocalStorage('auth');
        const isLoggedIn = (!!auth && moment(auth.token_Expiry).isAfter(moment(new Date()))) ? true : false;
        this.props.setLoggedInStatus(isLoggedIn);

        if (isLoggedIn) {
            this.props.handleGetProfile();
        }
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default AppView;
