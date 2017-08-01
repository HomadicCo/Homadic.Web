import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { getLoginUrl } from '../../../functions';
import Avatar from '../../../Components/Avatar/Avatar';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.setAddNewPlaceMode = this.setAddNewPlaceMode.bind(this);
    }

    renderLoggedIn() {
        let { profile } = this.props;

        return (
            <Avatar size={40} profile={profile.data} />
        );
    }

    setAddNewPlaceMode(value, e) {
        e.preventDefault();
        let { setAddNewPlaceCoordinates, setAddNewPlaceMode, removeAddNewPlaceMarker } = this.props;

        setAddNewPlaceMode(value);

        if (!value) {
            setAddNewPlaceCoordinates(undefined);
            removeAddNewPlaceMarker();
        }
    }

    renderLoggedOut() {
        const loginUrl = getLoginUrl(window.location.pathname);

        return (
            <a href={loginUrl}>Login</a>
        );
    }

    render() {
        let { authentication, map, params } = this.props;
        const classNames = {
            root: 'form-group map-typeahead',
            input: 'form-control',
            autocompleteContainer: ''
        }

        const inputProps = {
            placeholder: "Search cities..."
        }

        return (
            <div>
                <div className="d-flex search-container mr-3 mt-3">
                    <div className="ml-3">
                        {map.addNewPlaceMode ?
                            map.addNewPlaceCoordinates ? <button className="btn btn-success"><FontAwesome name="check" /> Add new place here</button> : undefined :
                            <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                        }

                    </div>
                </div>
                <div className="d-flex profile-actions mr-3 mt-3">
                    <div className="ml-3">
                        {map.addNewPlaceMode ?
                            <button onClick={this.setAddNewPlaceMode.bind(null, false)} className="btn btn-danger"><FontAwesome name="remove" /> Cancel</button> :
                            <button onClick={this.setAddNewPlaceMode.bind(null, true)} className="btn btn-success"><FontAwesome name="plus" /> Add</button>
                        }
                    </div>
                    <div className="ml-3">
                        {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionBar;