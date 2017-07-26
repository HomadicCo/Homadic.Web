import React from 'react';
import { browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
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
        return (
            <a href="https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=http://localhost:9990/signin-facebook">Login</a>
        );
    }

    render() {
        let { authentication, params } = this.props;
        const classNames = {
            root: 'form-group map-typeahead',
            input: 'form-control',
            autocompleteContainer: ''
        }

        return (
            <div>
                <div className="d-flex search-container mt-3 mr-3">
                    <div className="ml-3">
                        <PlacesTypeahead {...this.props} classNames={classNames} placeholder="Search cities..." />
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