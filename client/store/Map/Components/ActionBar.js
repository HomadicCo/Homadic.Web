import React from 'react';
import { Link } from 'react-router';
import { getLoginUrl } from '../../../functions';
import Avatar from '../../../Components/Avatar/Avatar';
import HoveredListing from './HoveredListing';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.setAddNewListingMode = this.setAddNewListingMode.bind(this);
    }

    setAddNewListingMode(value, e) {
        e.preventDefault();
        let { setAddNewListingCoordinates, setAddNewListingMode } = this.props;

        setAddNewListingMode(value);

        if (!value) {
            setAddNewListingCoordinates(undefined);
        }
    }

    renderLoggedIn() {
        let { map, profile } = this.props;

        return (
            <div className="d-flex profile-actions mr-3 mt-3">
                <div className="ml-3 mt-1">
                    {map.addNewListingMode ?
                        <button onClick={this.setAddNewListingMode.bind(null, false)} className="btn btn-sm btn-danger"><i className="fas fa-times" /> Cancel</button> :
                        <button onClick={this.setAddNewListingMode.bind(null, true)} className="btn btn-sm btn-success"><i className="fas fa-plus" /> Add</button>
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
                    <a href={loginUrl} className="btn btn-success"><i className="fas fa-plus" /> Add</a>
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
            placeholder: 'Search cities...'
        }

        return (
            <div>
                {map.hoveredListing ? <HoveredListing listing={map.hoveredListing} /> : <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />}
            </div>
        );
    }

    render() {
        let { authentication, map } = this.props;

        return (
            <div>
                <div className="d-flex search-container mr-3 mt-3">
                    <div className="ml-3">
                        {map.addNewListingMode ?
                            map.addNewListingCoordinates ? <Link to="/add" className="btn btn-success"><i className="fas fa-check" /> Add new listing here</Link> : undefined :
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