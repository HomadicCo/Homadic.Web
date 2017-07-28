import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { getLoginUrl } from '../../../functions';
import Avatar from '../../../Components/Avatar/Avatar';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLoggedIn() {
        let { profile } = this.props;
        return (
            <Avatar size={30} profile={profile.data} />
        );
    }

    renderLoggedOut() {
        const loginUrl = getLoginUrl(window.location.pathname);

        return (
            <a href={loginUrl}>Login</a>
        );
    }

    render() {
        let { authentication, params } = this.props;
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
                <div className="d-flex search-container mt-3 mr-3">
                    <div className="ml-3">
                        <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                    </div>
                </div>
                <div className="d-flex profile-actions mt-3 mr-3">
                    <div className="ml-3 mt-2">
                        <Link className="btn btn-sm btn-success" to={"/add/" + params.citySlug}><FontAwesome name="plus" /> Add</Link>
                    </div>
                    <div className="ml-3 mt-2">
                        {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionBar;