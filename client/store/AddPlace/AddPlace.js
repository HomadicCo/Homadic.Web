import React from 'react';
import FontAwesome from 'react-fontawesome';
import { apiValidateToken } from '../../api';
import { getLoginUrl } from '../../functions';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import AddHeader from './components/AddHeader';
import AddFooter from './components/AddFooter';
import SelectPlace from './components/SelectPlace';

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

    componentSelector() {
        let { step } = this.props.params;
        switch (step) {
            case 'cost':
                return (
                    <p>Hello</p>
                )
            case 'place':
                return (
                    <SelectPlace {...this.props} />
                )
            default:
                return (
                    <SelectPlace {...this.props} />
                )
        }
    }

    renderComponents() {
        return (
            <div>
                <AddHeader {...this.props} />
                <div className="container">
                    {this.componentSelector()}
                </div>
                <AddFooter {...this.props} />
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