import React from 'react';
import moment from 'moment';
import { loadLocalStorage } from '../../functions';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillMount() {
        let { authentication, handleGetProfile, profile, setLoggedInStatus } = this.props;

        if (!authentication.isLoggedIn) {
            const auth = loadLocalStorage('auth');
            const isLoggedIn = (!!auth && moment(auth.token_Expiry).isAfter(moment(new Date()))) ? true : false;
            setLoggedInStatus(isLoggedIn);

            if (isLoggedIn) {
                if (profile.data == undefined)
                    handleGetProfile();
            }
        }
    }

    render() {
        let { profile, ui } = this.props;

        return (
            ui.loading || profile.updating ? <LoadingScreen /> : React.cloneElement(this.props.children, this.props)
        )
    }
}

export default AppView;
