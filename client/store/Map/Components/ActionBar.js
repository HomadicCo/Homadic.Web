import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { getLoginUrl } from '../../../functions';
import Avatar from '../../../Components/Avatar/Avatar';
import HoveredHome from './HoveredHome';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.setAddNewPlaceMode = this.setAddNewPlaceMode.bind(this);
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

    renderLoggedIn() {
        let { map, profile } = this.props;

        return (
            <div className="d-flex profile-actions mr-3 mt-3">
                <div className="ml-3 mt-1">
                    {map.addNewPlaceMode ?
                        <button onClick={this.setAddNewPlaceMode.bind(null, false)} className="btn btn-sm btn-danger"><FontAwesome name="remove" /> Cancel</button> :
                        <button onClick={this.setAddNewPlaceMode.bind(null, true)} className="btn btn-sm btn-success"><FontAwesome name="plus" /> Add</button>
                    }
                </div>
                <div className="ml-3">
                    <Avatar size={40} profile={profile.data} />
                </div>
            </div>
        );
    }

    renderLoggedOut() {
        const loginUrl = getLoginUrl(window.location.pathname);

        return (
            <div className="d-flex profile-actions mr-3 mt-3">
                <div className="ml-3">
                    <a href={loginUrl} className="btn btn-success"><FontAwesome name="plus" /> Add</a>
                </div>
            </div>
        );
    }

    renderSearchHoverToggle() {
        let { map } = this.props;

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
                {map.hoveredHome ? <HoveredHome home={map.hoveredHome} /> : <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />}
            </div>
        );
    }

    render() {
        let { authentication, map, params } = this.props;

        return (
            <div>
                <div className="d-flex search-container mr-3 mt-3">
                    <div className="ml-3">
                        {map.addNewPlaceMode ?
                            map.addNewPlaceCoordinates ? <Link to="/add" className="btn btn-success"><FontAwesome name="check" /> Add new place here</Link> : undefined :
                            this.renderSearchHoverToggle()
                        }

                    </div>
                </div>
                {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
            </div>
        )
    }
}

export default ActionBar;