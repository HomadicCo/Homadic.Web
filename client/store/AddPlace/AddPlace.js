import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import { getLoginUrl } from '../../functions';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import AddHeader from './components/AddHeader';
import AddFooter from './components/AddFooter';
import SelectPlace from './components/SelectPlace';

class AddPlace extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        };

        // and we're logged in
        const loginUrl = getLoginUrl(window.location.pathname);
        if (props.authentication.isLoggedIn && !!props.map.addNewPlaceCoordinates) {
            props.handleGetNearbyResults(props.map.addNewPlaceCoordinates).then(() => {
                this.setState({ isLoading: false });
            }).catch(() => {
                browserHistory.push("/");
            });
        } else {
            browserHistory.push("/");
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
        let { isLoading } = this.state;

        return (
            authentication.isLoggedIn && !isLoading ? this.renderComponents() : <LoadingScreen />
        )
    }
}

export default AddPlace;