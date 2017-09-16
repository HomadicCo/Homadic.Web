import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import FullScreenOverlay from '../FullScreenOverlay/FullScreenOverlay';
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

    componentWillReceiveProps(nextProps) {
        // https://github.com/ReactTraining/react-router/tree/v3/examples/pinterest
        // if we changed routes...
        if ((
            nextProps.location.key !== this.props.location.key &&
            nextProps.location.state &&
            nextProps.location.state.modal
        )) {
            // save the old children (just like animation)
            this.previousChildren = this.props.children
        }
    }

    render() {
        let { location } = this.props

        let isModal = (
            location.state &&
            location.state.modal &&
            this.previousChildren
        )

        return (
            <div>
                {isModal ?
                    React.cloneElement(this.previousChildren, this.props) :
                    React.cloneElement(this.props.children, this.props)
                }

                {isModal && (
                    <FullScreenOverlay isOpen={true} returnTo={location.state.returnTo}>
                        {React.cloneElement(this.props.children, this.props)}
                    </FullScreenOverlay>
                )}
            </div>
        )
    }
}

export default AppView;
