import React from 'react';
import moment from 'moment';
import { getLoginUrl, loadLocalStorage } from '../../functions';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.authenticate();
    }

    getDerivedStateFromProps(nextProps) {
        if (this.props.ui.loading == nextProps.ui.loading) return;

        if (this.props !== nextProps) {
            this.authenticate();
        }
    }

    authenticate() {
        let { authentication, handleGetProfile, profile, setLoggedInStatus, setLoadingStatus } = this.props;

        if (!authentication.isLoggedIn) {
            setLoadingStatus(true);

            const auth = loadLocalStorage('auth');
            const isLoggedIn = (!!auth && moment(auth.token_Expiry).isAfter(moment(new Date()))) ? true : false;
            setLoggedInStatus(isLoggedIn);

            if (isLoggedIn) {
                if (profile.data == undefined)
                    handleGetProfile();
            } else {
                const loginUrl = getLoginUrl(window.location.pathname);
                window.location = loginUrl;
            }

            setLoadingStatus(false);
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
