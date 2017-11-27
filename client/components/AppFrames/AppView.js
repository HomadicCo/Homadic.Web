import React from 'react';
import moment from 'moment';
import { loadLocalStorage } from '../../functions';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { authentication, handleGetProfile, setLoggedInStatus } = this.props;

        if (!authentication.isLoggedIn) {
            const auth = loadLocalStorage('auth');
            const isLoggedIn = (!!auth && moment(auth.token_Expiry).isAfter(moment(new Date()))) ? true : false;
            setLoggedInStatus(isLoggedIn);

            if (isLoggedIn) {
                handleGetProfile();
            }
        }
    }

    render() {
        let { ui } = this.props;

        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
                {ui.loading ? <LoadingScreen /> : undefined}
            </div>
        )
    }
}

export default AppView;
